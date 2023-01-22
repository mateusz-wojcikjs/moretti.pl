import React, { FC, useRef } from "react";
import { FormFieldProps } from "./types";
import { StyledError, StyledFormField } from "./FormField.styled";
import { CSSTransition } from "react-transition-group";
import Checkbox from "../Checkbox";

const FormField: FC<FormFieldProps> = ({
  onChange,
  value,
  error,
  name,
  placeholder,
  required,
  type,
  label,
}) => {
  const nodeRef = useRef(null);

  const renderFormField = () => {
    switch (name) {
      case "message":
        return (
          <label>
            <span>{label}</span>
            <textarea
              id={name}
              rows={8}
              className={`text-field${error ? " error" : ""}`}
              {...{ type, name, placeholder, onChange, value, required }}
            />
          </label>
        );
      case "agree":
        return <Checkbox {...{ name, onChange, required }}>{label}</Checkbox>;
      default:
        return (
          <label>
            <span>{label}</span>
            <input
              id={name}
              {...{ type, name, placeholder, onChange, value, required }}
              className={`text-field${error ? " error" : ""}`}
            />
          </label>
        );
    }
  };

  return (
    <StyledFormField {...{ required }}>
      {renderFormField()}
      <CSSTransition
        nodeRef={nodeRef}
        in={!!error}
        timeout={100}
        classNames="error-message"
      >
        <div>{error && <StyledError ref={nodeRef}>{error}</StyledError>}</div>
      </CSSTransition>
    </StyledFormField>
  );
};
export default FormField;
