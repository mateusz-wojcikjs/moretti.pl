import styled from "styled-components";

export const StyledContactForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 50rem;
  }

  .input-group {
    position: relative;
    width: 100%;

    input,
    textarea {
      border: 1px solid #dadada;
      font-size: ${({ theme }) => theme.font.size.m};
      font-family: ${({ theme }) => theme.font.family.inter};
      padding: 1rem;
      margin-bottom: 2rem;
      width: 100%;
    }

    label {
      font-family: ${({ theme }) => theme.font.family.inter};
      position: absolute;
      top: -14px;
    }
  }

  .form-agree {
    display: flex;
    font-size: ${({ theme }) => theme.font.size.s};

    input {
      width: auto;
      margin-right: 1rem;
    }
  }

  textarea {
    resize: vertical;
  }
`;
