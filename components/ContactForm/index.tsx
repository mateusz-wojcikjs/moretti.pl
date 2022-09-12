import React, { useState } from "react";
import Button from "../common/Button";
import { StyledContactForm } from "./ContactForm.styled";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <StyledContactForm>
      <form>
        <div className="input-group">
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Twoje imię i nazwisko"
            onChange={handleChange}
            value={data.name}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Twój adres e-mail"
            onChange={handleChange}
            value={data.email}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Numer telefonu</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Twój numer telefonu"
            onChange={handleChange}
            value={data.phone}
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Wiadomość</label>
          <textarea
            name="message"
            id="message"
            placeholder="Napisz do nas..."
            rows={8}
            onChange={handleChange}
            value={data.message}
            required
          ></textarea>
        </div>
        <div className="input-group form-agree">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            onChange={handleCheckbox}
            checked={data.agree}
            required
          />
          Wyrażam zgodę na przetwarzanie danych osobowych.
        </div>

        <Button
          type="secondary"
          text="Wyślij"
          onClick={(e) => e.preventDefault()}
        />
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
