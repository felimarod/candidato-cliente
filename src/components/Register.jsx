import PropTypes from "prop-types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpSchema } from "../schemas/signUpSchema";
import { agregarCandidatoAPI, obtenerCandidatoAPI } from "../api/candidatoAPI";

const Register = ({ tiposDeDocumentos }) => {
  return (
    <main>
      <h3>Bienvenido, !Postulate aquí!</h3>
      <div className="card">
        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
            numDoc: "",
            email: "",
            fechaNacimiento: "",
            tipoDeDocumento: "",
            terminos: false,
          }}
          validationSchema={signUpSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            console.log(actions);
            obtenerCandidatoAPI(values.email)
              .then((candidato) => {
                if (candidato === null) {
                  agregarCandidatoAPI(values)
                    .then((candidato) => {
                      console.log(JSON.stringify(candidato));
                      alert("Guardado");
                      actions.resetForm();
                    })
                    .catch((err) => {
                      alert(
                        "No se pudo guardar el candidato, revisa tu conexión."
                      );
                      console.error(err);
                    });
                }
              })
              .catch((err) => {
                alert("No se pudo guardar el candidato, revisa tu conexión.");
                console.error(err);
              });
          }}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="nombre">Nombre</label>
              <Field id="nombre" name="nombre" type="text" autoFocus />
              <ErrorMessage
                name="nombre"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="apellido">Apellido</label>
              <Field id="apellido" name="apellido" type="text" />
              <ErrorMessage
                name="apellido"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="tipoDeDocumento">Tipo de Documento</label>
              <Field id="tipoDeDocumento" name="tipoDeDocumento" as="select">
                <option value="">Seleccione el tipo de documento</option>
                {tiposDeDocumentos.map((tipoDeDocumento, key) => (
                  <option key={key} value={tipoDeDocumento.idTipoDoc}>
                    {tipoDeDocumento.descTipoDoc}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="tipoDeDocumento"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="numDoc">Numero de documento</label>
              <Field id="numDoc" name="numDoc" type="number" />
              <ErrorMessage
                name="numDoc"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="fechaNacimiento">fechaNacimiento</label>
              <Field id="fechaNacimiento" name="fechaNacimiento" type="date" />
              <ErrorMessage
                name="fechaNacimiento"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="terminos">
                <Field id="terminos" name="terminos" type="checkbox" /> Al
                seleccionar este campo, acepta el uso y tratamiento de sus datos
                respecto a nuestros terminos y condiciones
              </label>
              <ErrorMessage
                name="terminos"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button type="submit">Registrar</button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};
Register.propTypes = {
  tiposDeDocumentos: PropTypes.array,
};

export default Register;
