// Librerías externas
import axios from "axios";

/**
 * Obtiene los tipos de documentos del backend
 * @returns Lista de tipos de documentos
 */
const obtenerTiposDocumentosAPI = async () => {
  await axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/tipo-documento`)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
};

export { obtenerTiposDocumentosAPI };
