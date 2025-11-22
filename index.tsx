import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Initializing React App...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found!");
  throw new Error("Could not find root element to mount to");
}

console.log("Root element found, creating root...");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log("App rendered.");
