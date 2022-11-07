import {OBTENER_REGISTROS, OBTENER_REGISTRO_BY_ID, MODIFICAR_REGISTRO, ELIMINAR_REGISTRO, AÑADIR_REGISTRO, OBTENER_BUSQUEDA, ESTABLECER_ACCION
 
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_REGISTROS:
      return {
        ...state,
        registros: action.payload,
      };
    case OBTENER_REGISTRO_BY_ID:
      return {
        ...state,
        registro: action.payload,
      };
    case AÑADIR_REGISTRO:
      return {
        ...state,
        registros: [...state.registros, action.payload],
      };
    case MODIFICAR_REGISTRO:
      return {
        ...state,
        registros: state.registros.map((registro) => {
          return registro._id === action.payload._id
            ? (registro = action.payload)
            : registro;
        }),
      };
    case ESTABLECER_ACCION:
      return {
        ...state,
        accion: action.payload,
      };
    case ELIMINAR_REGISTRO:
      return({
        ...state,
        registros:state.registros.filter(registro=>registro._id!==action.payload)
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
