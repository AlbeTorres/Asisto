import trabajadorReducer from "./trabajadorReducer";
import trabajadorContext from "./trabajadorContext";
import { useReducer } from "react";
import tokenAuth from "../../config/tokenAuth";
import clienteAxios from "../../config/axios";
import { ELIMINAR_TRABAJADOR, MODIFICAR_TRABAJADOR, OBTENER_TRABAJADORES, OBTENER_TRABAJADOR_BY_ID, REGISTRAR_TRABAJADOR } from "../../types";

const TrabajadorState = (props) => {

  const initialState = {
    trabajadores: [
     
    ],
    trabajador: null,
    busqueda: "",

  };

  const [state, dispatch] = useReducer(trabajadorReducer, initialState);

  //operaciones Crud
  const obtenerTrabajadores = async () => {
    try {
      const response = await clienteAxios.get('api/trabajadores')

      dispatch({
        type: OBTENER_TRABAJADORES,
        payload: response.data.trabajadores,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerTrabajador = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
        const response = await clienteAxios.get('api/trabajadores')

        const trabajador = response.data.trabajadores.filter(trabajador=>trabajador._id===id)



      

      dispatch({
        type: OBTENER_TRABAJADOR_BY_ID,
        payload: trabajador[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const crearTrabajador = async (datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.post('api/trabajadores',datos)

      console.log(response)

      dispatch({
        type: REGISTRAR_TRABAJADOR,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const modificarTrabajador = async (id, datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
        const response = await clienteAxios.patch(`api/trabajadores/${id}`,datos)
        console.log(response)

      

      

      dispatch({
        type: MODIFICAR_TRABAJADOR,
        payload: response.data.trabajador,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarTrabajador = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.delete(`api/trabajadores/${id}`);
      console.log(response);

      dispatch({
        type: ELIMINAR_TRABAJADOR,
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



  return (
    <trabajadorContext.Provider
      value={{
        trabajadores: state.trabajadores,
        trabajador: state.trabajador,
      
        obtenerTrabajadores,
        obtenerTrabajador,
        crearTrabajador,
        modificarTrabajador,
        eliminarTrabajador,
        establecerBusqueda,
      }}
    >
      {props.children}
    </trabajadorContext.Provider>
  );
};

export default TrabajadorState;
