import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
// Подключение Bootstrap@5.3.0 из папки node_modules
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
