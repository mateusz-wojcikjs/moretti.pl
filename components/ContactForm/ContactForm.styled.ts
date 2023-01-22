import styled from "styled-components";

export const StyledContactForm = styled.div`
  position: relative;

  .form-submitted {
    text-align: center;
  }

  .form-submitted .checkmark {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: green;
    transform: scale(0);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 50rem;
  }

  .form-agree {
    display: flex;
    font-size: ${({ theme }) => theme.font.size.s};
    margin-bottom: 1.5rem;

    label,
    input {
      cursor: pointer;
    }

    input {
      width: auto;
      margin-right: 1rem;
    }
  }

  textarea {
    resize: vertical;
  }

  // CSS transitions

  .form-fade-enter,
  .form-fade-exit-done {
    opacity: 0;
  }

  .form-fade-enter-active {
    opacity: 1;
    transition: opacity 1300ms;
  }

  .message-dd {
    opacity: 0;
  }

  .form-fade-exit {
    opacity: 1;
  }

  .form-fade-exit-active {
    opacity: 0;
    transition: opacity 1300ms;
  }

  .message-fade-enter {
    opacity: 0;
  }

  .message-fade-enter-active {
    opacity: 0;
    transition: opacity 3200ms;
  }

  .message-fade-exit {
    opacity: 0;
  }

  .message-fade-exit-active {
    opacity: 1;
    transition: opacity 3200ms;
  }

  .message-fade-exit-done {
    opacity: 1;
  }

  .error-message-enter {
    opacity: 0;
  }

  .error-message-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  .error-message-exit {
    opacity: 1;
  }

  .error-message-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
`;

export const StyledFormMessage = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  font-family: ${({ theme }) => theme.font.family.inter};
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  text-align: center;
`;
