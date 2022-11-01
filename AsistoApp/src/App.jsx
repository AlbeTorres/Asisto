
import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./routes/Rutas";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="">
      <Router>
        <Rutas />
      </Router>
    </div>
  );
}

export default App;
