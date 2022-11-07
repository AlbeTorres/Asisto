import { OBTENER_BUSQUEDA,ELIMINAR_TRABAJADOR, MODIFICAR_TRABAJADOR, OBTENER_TRABAJADORES, OBTENER_TRABAJADOR_BY_ID, REGISTRAR_TRABAJADOR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TRABAJADORES:
      return {
        ...state,
        trabajadores: action.payload,
      };
    case OBTENER_TRABAJADOR_BY_ID:
      return {
        ...state,
        trabajador: action.payload,
      };
    case REGISTRAR_TRABAJADOR :
      return {
        ...state,
        trabajadores: [...state. trabajadores, action.payload],
      };
    case MODIFICAR_TRABAJADOR:
      return {
        ...state,
        trabajadores: state. trabajadores.map((trabajador) => {
          return trabajador._id === action.payload._id
            ? (trabajador = action.payload)
            : trabajador;
        }),
      };
  
    case ELIMINAR_TRABAJADOR:
      return({
        ...state,
        trabajadores:state. trabajadores.filter(trabajador=>trabajador._id!==action.payload)
      });

      case OBTENER_BUSQUEDA:
        return({
          ...state,
          busqueda: action.payload
        })
    default:
      return state;
  }
};
