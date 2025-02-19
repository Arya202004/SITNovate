import tensorflow as tf
from tensorflow.keras.models import load_model
import cv2
import numpy as np
from openvino.runtime import Core
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load models once when the server starts
decoder = load_model('Models/classifier_lstm_e19.h5', compile=False)
ie = Core()
model_ir = ie.read_model(model="Models/inceptionv3_model_ir/saved_model.xml")
compiled_model_ir = ie.compile_model(model=model_ir, device_name="GPU")
output_layer_ir = compiled_model_ir.output(0)

# Define hyperparameters
IMG_SIZE = (299, 224)
MAX_SEQ_LENGTH = 32
NUM_FEATURES = 2048
class_vocab = ['Abuse', 'Arson', 'Assault', 'Burglary', 'Explosion', 'Fighting', 'Normal', 'RoadAccidents', 'Robbery', 'Shooting']

def preprocess_frame(frame):
    preprocessed = cv2.resize(frame, IMG_SIZE)
    preprocessed = preprocessed[:, :, [2, 1, 0]]  # BGR -> RGB
    return preprocessed

def predict_video(video_path):
    cap = cv2.VideoCapture(video_path)
    encoder_output = []
    class_scores = {label: [] for label in class_vocab}

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        preprocessed = preprocess_frame(frame)
        features = compiled_model_ir([preprocessed[None, ...]])[output_layer_ir][0]
        encoder_output.append(features)

        if len(encoder_output) == MAX_SEQ_LENGTH:
            encoder_output = np.array(encoder_output)[None, ...]
            probabilities = decoder.predict(encoder_output)[0]
            for idx, i in enumerate(np.argsort(probabilities)[::-1][:3]):
                label = class_vocab[i]
                conf = probabilities[i]
                class_scores[label].append(conf)
            encoder_output = []

    # Handle any remaining frames if less than MAX_SEQ_LENGTH
    if encoder_output:
        encoder_output = np.array(encoder_output)[None, ...]
        probabilities = decoder.predict(encoder_output)[0]
        for idx, i in enumerate(np.argsort(probabilities)[::-1][:3]):
            label = class_vocab[i]
            conf = probabilities[i]
            class_scores[label].append(conf)

    cap.release()
    
    # Calculate average confidence scores
    avg_scores = {label: sum(scores) / len(scores) if scores else 0 for label, scores in class_scores.items()}
    return avg_scores

@app.route('/api/predict-video', methods=['POST'])
def video_prediction():
    try:
        data = request.json
        video_path = data.get('videoUrl')
        if not video_path:
            return jsonify({"error": "No video URL provided"}), 400

        predictions = predict_video(video_path)
        return jsonify({"predictions": predictions}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)