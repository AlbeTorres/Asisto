import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import alertaContext from "../../context/alertaContext/alertaContext";
import authContext from "../../context/authContext/authContext";

const Login = () => {
  const auxAlertaContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = auxAlertaContext;

  const AuthContext = useContext(authContext);
  const { autenticado, mensaje, iniciarSesion, usuarioAutenticado } =
    AuthContext;

  const history = useNavigate();

  useEffect(() => {
    usuarioAutenticado();

    if (autenticado) {
      history("/");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado]);

  //state para inciar sesión
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  //extraer email y password de auth
  const { email, password } = auth;

  //leer el email y password de los inputs
  const onChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  //acción al submit el form
  const onSubmit = (e) => {
    e.preventDefault();

    //validar campos
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    if (password.length < 8) {
      mostrarAlerta("La contraseña debe contener más 8 caracteres", "error");
      return;
    }

    //pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className="max-w-sm mx-auto mt-20 px-10 w-4/5 min-w-fit">
      {alerta ? (
        <div className='text-xl  text-white rounded-md absolute right-4 text-center p-2 top-2 shadow-md bg-red-600'>{alerta.msg} </div>
      ) : null}
      <h2 className="text-center text-3xl text-gray-900 font-sans font-extrabold tracking-tight">
        Inicia sesión
      </h2>

      <form className="grid grid-cols-1  mt-5" onSubmit={onSubmit}>
        <div className="my-2 flex items-center pl-1 border-2 border-gray-500 rounded-md shadow-sm ">
          <FaEnvelope className="text-2xl p-1 text-gray-600"></FaEnvelope>
          <input
            className="py-1  w-full focus:outline-none"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Correo"
          />
        </div>
        <div className="my-2 flex items-center pl-1 border-2 border-gray-500 rounded-md shadow-sm ">
          <FaLock className="text-2xl p-1 text-gray-600"></FaLock>
          <input
           className="py-1  w-full focus:outline-none"
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={password}
            placeholder="Escribir Contraseña"
          />
        </div>

        <input className="btn mt-3" type="submit" value="Iniciar sesión" />

        <label className="mx-auto mt-4">
          <input
            className="mr-1"
            type="checkbox"
            id="cbox1"
            value="first_checkbox"
          />
          Recuérdame
        </label>

        <Link to={"/register"} className="text-center  mt-4 text-blue-500">
          Olvidé mi contraseña
        </Link>
      </form>
    </div>
  );
};

export default Login;
