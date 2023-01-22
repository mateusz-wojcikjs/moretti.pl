import React, { FormEvent, useCallback, useReducer, useState } from "react";
import { FormErrorKeys, FormValues } from "interfaces/form.interface";
import { actionTypes, formReducer } from "reducers/useReducer";
import { ValidationError } from "yup";
import { fieldMap, initialValues } from "./consts";
import * as process from "process";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [internalError, setInternalError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [{ values, errors }, dispatch] = useReducer(formReducer, initialValues);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      const { name, value, checked, type } = event.target;
      const payloadValue: FormValues[keyof FormValues] =
        type === "checkbox" ? checked : value;

      console.log(payloadValue);

      if (errors) {
        dispatch({
          type: actionTypes.updateErrors,
          payload: {
            [name]: "",
          },
        });
      }

      dispatch({
        type: actionTypes.updateValues,
        payload: {
          [name]: payloadValue,
        },
      });
    },
    [errors],
  );

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      setFormSubmitted(true);
      setInternalError("");

      try {
        const response = await fetch(`${process.env.API_URL}message`, {
          body: JSON.stringify(values),
          method: "POST",
        });

        const data = await response.json();
        if (!data.errors) {
          setMessage(data.message);
          setFormVisible(false);
        }

        if (data.inner) {
          data?.inner?.map((error: ValidationError) => {
            let message: string = "";
            if (error.name === "ValidationError") {
              switch (error.type) {
                case "min":
                  message = `${
                    fieldMap[error.path as FormErrorKeys]
                  } musi składać się conajmniej z ${error?.params?.min} znaków`;
                  break;
                case "max":
                  message = `${
                    fieldMap[error.path as FormErrorKeys]
                  } może mieć maksymalnie ${error?.params?.max} znaków`;
                  break;
                case "email":
                  message = `${
                    fieldMap[error.path as FormErrorKeys]
                  } jest nieprawidłowy`;
                  break;
                default:
                  message = error.message;
              }
            }
            dispatch({
              type: actionTypes.updateErrors,
              payload: {
                [error.path as FormErrorKeys]: message,
              },
            });
          });
        }
        if (response.status === 500) {
          setInternalError(
            "Błąd podczas wysyłania wiadomości. Prosimy o kontakt bezpośredni.",
          );
        }
      } catch (e) {
        setInternalError(
          "Błąd podczas wysyłania wiadomości. Prosimy o kontakt bezpośredni.",
        );
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [values],
  );
  return {
    onSubmit,
    onChange,
    values,
    errors,
    isLoading,
    message,
    formSubmitted,
    formVisible,
    internalError,
  };
};
