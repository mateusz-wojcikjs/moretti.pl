import React, { FC, PropsWithChildren } from "react";
import { StyledCheckbox } from "./Checkbox.styled";
import { CheckboxProps } from "interfaces/checkbox.interface";

const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  onChange,
  name,
  required,
}) => {
  return (
    <StyledCheckbox>
      <label>
        <input type="checkbox" {...{ onChange, name, required }} />
        <span>{children}</span>
      </label>
    </StyledCheckbox>
  );
};

export default Checkbox;
