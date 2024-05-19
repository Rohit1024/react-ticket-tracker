import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.css";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase/config.ts";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
      <Toaster />
    </FirebaseAppProvider>
  </React.StrictMode>
);
