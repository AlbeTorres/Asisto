import registroReducer from "./registroReducer";
import registroContext from "./registroContext";
import { useReducer } from "react";
import tokenAuth from "../../config/tokenAuth";
import clienteAxios from "../../config/axios";
import {OBTENER_REGISTROS, OBTENER_REGISTRO_BY_ID, MODIFICAR_REGISTRO, ELIMINAR_REGISTRO, AÑADIR_REGISTRO, OBTENER_BUSQUEDA, ESTABLECER_ACCION
 
} from "../../types";

const RegistroState = (props) => {

  const initialState = {
    registros: [
      {
        _id: "",
        fecha: "",
        area: "",
        listaTrabadores: "",
      },
    ],
    registro: null,
    busqueda: "",
    accion: { id: "", accion: "" },
  };

  const [state, dispatch] = useReducer(registroReducer, initialState);

  //operaciones Crud
  const obtenerRegistros = async () => {
    try {
      const response = await clienteAxios.get('api/registros')

      dispatch({
        type: OBTENER_REGISTROS,
        payload: response.data.registros,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerRegistro = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
        const response = await clienteAxios.get('api/registros/')

        const registro = response.data.registros.filter(registro=>registro._id===id)



      

      dispatch({
        type: OBTENER_REGISTRO_BY_ID,
        payload: registro[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const crearRegistro = async (datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.post('api/registros',datos)

      console.log(response)

      dispatch({
        type: AÑADIR_REGISTRO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const modificarRegistro = async (id, datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
        const response = await clienteAxios.patch(`api/registros/${id}`,datos)
        console.log(response)

      

      

      dispatch({
        type: MODIFICAR_REGISTRO,
        payload: response.data.registro,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarRegistro = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.delete(`api/registros/${id}`);
      console.log(response);

      dispatch({
        type: ELIMINAR_REGISTRO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };


  const establecerBusqueda = (search) => {
    dispatch({
      type: OBTENER_BUSQUEDA,
      payload: search,
    });
  };


  const establecerAccion = (accion) => {
    dispatch({
      type: ESTABLECER_ACCION,
      payload: accion,
    });
  };

 
  return (
    <registroContext.Provider
      value={{
        registros:state.registros,
        registro:state.registro,
        busqueda:state.busqueda,
        accion:state.accion,
        obtenerRegistro,
        obtenerRegistros,
        modificarRegistro,
        eliminarRegistro,
        crearRegistro,
        establecerBusqueda,
        establecerAccion,
      
      }}
    >
      {props.children}
    </registroContext.Provider>
  );
};

export default RegistroState;
