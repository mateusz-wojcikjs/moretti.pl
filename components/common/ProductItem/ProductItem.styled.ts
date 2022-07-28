import styled from "styled-components";

export const StyledProductItem = styled.div`
  max-width: 42rem;

  .item-content {
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    padding: 7.5rem;
    color: ${({ theme }) => theme.colors.white};
    position: relative;

    .item-title {
      font-size: ${({ theme }) => theme.font.size.l};
    }

    .item-icon {
      background: ${({ theme }) => theme.colors.white};
      height: 9rem;
      width: 9rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    p {
      text-align: center;
    }
  }
`;
