import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import "./index.css";
const root = document.getElementById("root");
createRoot(root).render(
    <StrictMode>
        <App/>
    </StrictMode>
);