import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeConsentSystem } from "@/lib/consent";

initializeConsentSystem();
createRoot(document.getElementById("root")!).render(<App />);
