import Register from "./components/Register";
import { useEffect, useState } from "react";
import { obtenerTiposDocumentosAPI } from "./api/tipoDocumentoAPI";

function App() {
  const [tiposDeDocumentos, setTiposDeDocumentos] = useState([]);

  // Hook que ejecuta código al crear componente
  useEffect(() => {
    obtenerTiposDocumentosAPI()
      .then((tiposDeDocumentos) => {
        if (tiposDeDocumentos) {
          // Modifica el state
          setTiposDeDocumentos(tiposDeDocumentos);
        } else {
          // Modifica el state
          setTiposDeDocumentos([]);
          console.error("Error trayendo los Tipos de Documentos");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      {<Register tiposDeDocumentos={tiposDeDocumentos} />}
    </div>
  );
}

export default App;
