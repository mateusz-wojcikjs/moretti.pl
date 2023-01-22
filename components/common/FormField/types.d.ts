import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface FormFieldProps {
  onChange: (
    // eslint-disable-next-line no-unused-vars
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ) => void;
  value?: string;
  error: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type: HTMLInputTypeAttribute;
  label: string;
}
