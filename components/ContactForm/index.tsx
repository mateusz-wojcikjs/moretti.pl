import React, { useRef } from "react";
import { StyledContactForm, StyledFormMessage } from "./ContactForm.styled";
import { CSSTransition } from "react-transition-group";
import { useContactForm } from "./useContactForm";
import Button from "../common/Button";
import LoadingSpinner from "../layout/LoadingSpinner";
import FormField from "../common/FormField";

const ContactForm = () => {
  const {
    onSubmit,
    onChange,
    values,
    errors,
    isLoading,
    message,
    formVisible,
    internalError,
  } = useContactForm();

  const nodeRef = useRef(null);
  const nodeMessageRef = useRef(null);

  return (
    <StyledContactForm>
      <CSSTransition
        nodeRef={nodeRef}
        in={formVisible}
        timeout={100}
        classNames="form-fade"
      >
        <form onSubmit={onSubmit} ref={nodeRef}>
          <FormField
            value={values.name}
            error={errors.name}
            name={"name"}
            placeholder={"Twoje imię i nazwisko"}
            label={"Imię i nazwisko"}
            required
            type="text"
            {...{ onChange }}
          />

          <FormField
            value={values.email}
            error={errors.email}
            name={"email"}
            placeholder={"Twój adres e-mail"}
            label={"E-mail"}
            required
            type="email"
            {...{ onChange }}
          />
          <FormField
            value={values.phone}
            error={errors.phone}
            name={"phone"}
            placeholder={"Twój numer telefonu"}
            label={"Numer telefonu"}
            type="text"
            {...{ onChange }}
          />
          <FormField
            value={values.message}
            error={errors.message}
            name={"message"}
            placeholder={"Napisz do nas..."}
            label={"Wiadomość"}
            required
            type="text"
            {...{ onChange }}
          />
          <FormField
            value={values.agree?.toString() || ""}
            error={errors.agree?.toString() || ""}
            name={"agree"}
            label={"Wyrażam zgodę na przetwarzanie danych osobowych."}
            required
            type="checkbox"
            {...{ onChange }}
          />

          <Button
            htmlType="submit"
            size="l"
            type="tertiary"
            disabled={isLoading}
          >
            {isLoading || !formVisible ? (
              <>
                Wysyłanie... <LoadingSpinner />
              </>
            ) : (
              "Wyślij"
            )}
          </Button>
        </form>
      </CSSTransition>
      {internalError && <p>{internalError}</p>}
      <CSSTransition
        nodeRef={nodeMessageRef}
        in={formVisible}
        timeout={300}
        classNames="message-fade"
      >
        <StyledFormMessage ref={nodeMessageRef}>{message}</StyledFormMessage>
      </CSSTransition>
    </StyledContactForm>
  );
};

export default ContactForm;
