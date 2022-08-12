import styled from "styled-components";

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
  margin-bottom: 2.5rem;
`;
