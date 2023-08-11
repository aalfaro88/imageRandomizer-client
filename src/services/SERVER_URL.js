// src/services/SERVER_URL.js

let SERVER_URL;

if (window.location.hostname === "http://localhost:5173") {
  SERVER_URL = "http://localhost:4000";
} else {
  SERVER_URL = "https://image-jumble-server.adaptable.app";
}

export { SERVER_URL };
