import styled from "styled-components";

export const StyledListIconItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  .icon-box {
    height: 50px;
    width: 50px;
    fill: none;
    fill-rule: nonzero;
    stroke-width: 2px;
    stroke: ${({ theme }) => theme.colors.secondary};
    margin-right: 2rem;
  }

  .title {
    font-size: ${({ theme }) => theme.font.size.s};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .content {
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.colors.lightBlack};

    p {
      font-size: inherit;
      color: inherit;
    }
  }
`;
