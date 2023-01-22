import styled from "styled-components";

export const StyledFormField = styled.div<{ required?: boolean }>`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  .error {
    border: 1px solid ${({ theme }) => theme.colors.red} !important;
  }

  .text-field {
    transition: border-color 200ms ease;
    border: 1px solid #dadada;
    font-size: ${({ theme }) => theme.font.size.m};
    font-family: ${({ theme }) => theme.font.family.inter};
    padding: 1rem;
    width: 100%;
  }

  label {
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};

    span {
      position: relative;

      &::after {
        content: "*";
        color: orangered;
        position: absolute;
        display: ${({ required }) => (required ? "contents" : "none")};
      }
    }
  }
`;

export const StyledError = styled.span`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.colors.red};
`;
