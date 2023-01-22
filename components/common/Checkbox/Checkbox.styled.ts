import styled from "styled-components";

export const StyledCheckbox = styled.div`
  label {
    cursor: pointer;
    line-height: 1.1;
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1em auto;
  }

  input[type="checkbox"] {
    cursor: pointer;
    appearance: none;
    background-color: #fff;
    margin: 0;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.secondary};

    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;
