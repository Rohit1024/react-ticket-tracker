import { AuthProvider, FirestoreProvider } from "reactfire";
import { auth, firestore } from "./firebase/config";
import RootApplication from "./components/layouts/layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <BrowserRouter>
          <RootApplication />
        </BrowserRouter>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
