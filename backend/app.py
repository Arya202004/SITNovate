from flask import Flask, request, jsonify
from flask_cors import CORS
from predictions import predict_video
import tempfile
import urllib.request
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/predict-video', methods=['POST'])
def analyze_video():
    try:
        data = request.json
        video_url = data.get('videoUrl')
        user_id = data.get('userId')

        if not video_url or not user_id:
            return jsonify({'error': 'Missing video URL or user ID'}), 400

        # Download video to temp file
        with tempfile.NamedTemporaryFile(delete=False, suffix='.mp4') as temp_file:
            urllib.request.urlretrieve(video_url, temp_file.name)
            video_path = temp_file.name

            # Run prediction
            predictions = predict_video(video_path)

        # Here you would typically save to a database, but for this example, we'll just return the prediction
        return jsonify(predictions)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)