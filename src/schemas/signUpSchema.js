import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  nombre: Yup.string()
    .max(30, "El nombre debe tener máximo 30 letras")
    .required("El nombre es requerido"),
  apellido: Yup.string()
    .max(30, "El apellido debe tener máximo 30 letras")
    .required("El apellido es requerido"),
  numDoc: Yup.number()
    .max(999999999999999, "El valor excede la cantidad máxima aceptada")
    .required("El número de documento es requerido"),
  email: Yup.string()
    .max(30, "El correo debe tener máximo 30 letras")
    .email("Ingrese un correo electronico válido")
    .required("El correo electonico es requerido"),
  fechaNacimiento: Yup.date()
    .required("La fecha de nacimiento es requerida"),
  tipoDeDocumento: Yup.string()
    .oneOf(
      ["CC", "TI", "TE", "CE", "NIT", "PAS"],
      "Debe seleccionar un tipo de documento"
    )
    .required("El tipo de documento es requerido"),
  terminos: Yup.bool()
    .oneOf([true], "Debes aceptar los terminos y condiciones")
    .required("Requerido"),
});
