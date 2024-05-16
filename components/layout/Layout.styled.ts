import styled from "styled-components";
import breakpoints from "assets/theme/breakpoints";

interface GridProps {
  colCount: number;
  gap: number;
  isCentered?: boolean;
}

export const Wrapper = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns:
    [full-start] 15px 1fr [container-start] minmax(70rem, 140rem)
    [container-end] 1fr 15px [full-end];
  margin: 0;
  padding: 0;
  @media only screen and ${breakpoints.device.xxl} {
    grid-template-columns:
      [full-start] 15px 1fr [container-start] minmax(57.5rem, 115rem)
      [container-end] 1fr 15px [full-end];
  }
  @media only screen and ${breakpoints.device.xl} {
    grid-template-columns:
      [full-start] 15px 1fr [container-start] minmax(50rem, 100rem)
      [container-end] 1fr 15px [full-end];
  }
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns:
      [full-start] 15px 1fr [container-start] minmax(14rem, 70rem)
      [container-end] 1fr 15px [full-end];
  }
`;

export const FullSectionGray = styled.section<{ pt5?: boolean }>`
  grid-column: full-start / full-end;
  padding-top: ${({ pt5 }) => (pt5 ? "10rem" : 0)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Container = styled.div<{ pt5?: boolean }>`
  grid-column: container-start / container-end;
  position: relative;
  padding-top: ${({ pt5 }) => (pt5 ? "20rem" : 0)};
  padding-bottom: ${({ pt5 }) => (pt5 ? "20rem" : 0)};

  @media only screen and ${breakpoints.device.m} {
    padding-top: ${({ pt5 }) => (pt5 ? "10rem" : 0)};
    padding-bottom: ${({ pt5 }) => (pt5 ? "10rem" : 0)};
  }

  .cta-row {
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  .text-img {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and ${breakpoints.device.xs} {
      grid-template-columns: 1fr;
    }
  }

  .about {
    h3 {
      font-size: ${({ theme }) => theme.font.size.lg};
    }

    p {
      color: ${({ theme }) => theme.colors.black};
    }

    &--text-box {
      padding-left: 5rem;
      margin-top: 2.5rem;

      li {
        list-style-type: none;
        position: relative;
        margin-left: 10px;

        &::before {
          content: "";
          height: 5px;
          width: 5px;
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .privacy {
    margin: 15rem 0;

    h1,
    h2,
    h3 {
      margin: 5rem 0 2.5rem;
      color: ${({ theme }) => theme.colors.secondary};
      font-family: ${({ theme }) => theme.font.family.bebasNeue};
    }

    li {
      color: ${({ theme }) => theme.colors.grayDark};
      margin-left: 1rem;
    }

    p,
    li {
      font-family: ${({ theme }) => theme.font.family.inter};
    }

    ul {
      margin-bottom: 2.5rem;
    }

    h1 {
      font-size: ${({ theme }) => theme.font.size.lg};
    }

    h2 {
      font-size: ${({ theme }) => theme.font.size.l};
    }
  }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({ colCount }: GridProps) =>
      `repeat(${colCount}, 1fr)`};
    grid-column-gap: ${({ gap }: GridProps) => `${gap}rem`};
    align-items: ${({ isCentered }: GridProps) =>
      isCentered ? "center" : "start"};
    @media only screen and ${breakpoints.device.sm} {
        grid-template-columns: 1fr;
        grid-row-gap: 2.5rem;
    }
}

.text-box {
    h2 {
        font-size: ${({ theme }) => theme.font.size.xl};
        font-weight: 400;
        margin-bottom: 5rem;
        font-family: ${({ theme }) => theme.font.family.bebasNeue};
        position: relative;

        &:after {
            content: "";
            background: ${({ theme }) => theme.colors.secondaryAccent};
            height: 3px;
            width: 200px;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }

    a {
        margin-top: 5rem;
    }

}
`;

export const StyledGridItems = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  align-items: stretch;
  padding-bottom: 2.5rem;

  @media only screen and ${breakpoints.device.xl} {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
    justify-content: center;
  }
  @media only screen and ${breakpoints.device.sm} {
    justify-items: center;
  }
`;
export const StyledGridPartners = styled(Grid)`
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 25rem));
    row-gap: 2.5rem;
    justify-content: center;
    justify-items: center;
  }

  .item {
    position: relative;
    height: 5rem;
    width: 100%;
  }
`;
export const StyledGridFooter = styled(Grid)`
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 24rem));
    column-gap: 2.5rem;
    row-gap: 2.5rem;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  @media only screen and ${breakpoints.device.xl} {
    max-width: 100rem;
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;

  img {
    transition: transform ease 600ms;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
