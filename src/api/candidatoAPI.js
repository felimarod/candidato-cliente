// Librerías externas
import axios from "axios";

/**
 * Obtiene el candidato del backend
 * @param {*} id Candidato a obtener
 * @returns Candidato o null
 */
const obtenerCandidatoAPI = async (id) => {
  await axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/candidato/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.error("Hubo error al obtener las tareas");
      console.error(error);
      return null;
    });
};

/**
 * Crea un candidato en el backend
 * @param {*} candidato Candidato a crear
 * @returns candidato creado
 */
const agregarCandidatoAPI = async (candidato) => {
  await axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/candidato`, candidato)
    .then((respuesta) => {
      if (respuesta.status === 201) {
        return respuesta.data;
      }
    })
    .catch((error) => {
      console.error("Hubo error al crear la tarea");
      console.error(error);
      return null;
    });
};

export { obtenerCandidatoAPI, agregarCandidatoAPI };
