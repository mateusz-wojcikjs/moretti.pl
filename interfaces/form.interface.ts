export interface FormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
  agree?: boolean;
}

export interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
  agree: string;
}

export interface FormState {
  values: FormValues;
  errors: FormErrors;
  isSubmitting: boolean;
}

export type FormErrorKeys = keyof FormErrors;
