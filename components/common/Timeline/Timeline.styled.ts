import styled from "styled-components";

export const StyledTimeline = styled.div`
  .tl-year {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    height: 7.5rem;
    width: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  ol {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: ${({ theme }) => theme.font.family.bebasNeue};
    font-size: ${({ theme }) => theme.font.size.l};

    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 50%;
      background-color: ${({ theme }) => theme.colors.gray};
      width: 1rem;
      height: 100%;
      z-index: -1;
      transform: translateX(50%);
    }
  }
`;

export const TimelineItem = styled.li<{ row: number }>`
  list-style: none;
  display: flex;
  align-items: center;
  height: 15rem;
  grid-row: ${({ row }) => `${row + 1}`};

  .tl-content {
    position: relative;

    &::after {
      content: "";
      height: 2px;
      width: 16rem;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.primary};
      bottom: 0;
    }
  }

  &.left {
    flex-direction: row-reverse;
    grid-column: 1;
    margin-right: 8rem;

    .tl-year {
      right: 50%;
      transform: translateX(50%);
    }

    .tl-content::after {
      right: -4.5rem;
    }
  }

  &.right {
    margin-left: 8rem;
    grid-column: 2;
    flex-direction: row;

    .tl-year {
      right: 50%;
      transform: translateX(50%);
    }

    .tl-content::after {
      left: -4.5rem;
    }
  }
`;
