import styled from "styled-components";

export const StyledTextBox = styled.div`
  margin-bottom: 7.5rem;

  .img-text {
    max-width: 60rem;
    float: right;
  }

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
