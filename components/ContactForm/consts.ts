import { FormState } from "../../interfaces/form.interface";

export const fieldMap = {
  name: "Imię i nazwisko",
  email: "E-mail",
  phone: "Numer Telefonu",
  message: "Wiadomość",
  agree: "Zgoda",
};

export const initialValues: FormState = {
  values: {
    name: "",
    phone: undefined,
    email: "",
    message: "",
    agree: false,
  },
  errors: {
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: "",
  },
  isSubmitting: false,
};
