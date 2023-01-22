import { ChangeEvent } from "react";

export interface CheckboxProps {
  onChange: (
    // eslint-disable-next-line no-unused-vars
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ) => void;
  name: string;
  required?: boolean;
}
