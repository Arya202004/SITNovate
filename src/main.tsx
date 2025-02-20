

import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import { Chatbot } from "./components/Chatbot"; // Import Chatbot

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Chatbot /> {/* Chatbase chatbot is now added globally */}
  </React.StrictMode>
);

import { createRoot } from 'react-dom/client'

import './index.css'

createRoot(document.getElementById("root")!).render(<App />);



