
import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./routes/Rutas";
import RegistroState from './context/registroContext/registroState'
import TrabajadorState from './context/trabajadorContext/trabajadorState'
import UsuarioState from './context/usuarioContext/usuarioState'
import AuthState from './context/authContext/authState'
import AlertaState from './context/alertaContext/alertaState'
import tokenAuth from "./config/tokenAuth";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="">
    <UsuarioState>
      <AuthState>
        <AlertaState>
    <TrabajadorState>
    <RegistroState>
      <Router>
        <Rutas />
      </Router>

    </RegistroState>

    </TrabajadorState>

        </AlertaState>
      </AuthState>
    </UsuarioState>
    </div>
  );
}

export default App;
