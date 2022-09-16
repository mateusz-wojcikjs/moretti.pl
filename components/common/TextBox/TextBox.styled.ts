import styled from "styled-components";

export const StyledTextBox = styled.div`
  p {
    color: ${({ theme }) => theme.colors.lightBlack};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 2rem;
  }
`;
