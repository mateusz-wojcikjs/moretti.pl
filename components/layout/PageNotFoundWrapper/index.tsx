import React, { PropsWithChildren } from "react";
import {
  StyledPageNotFoundImageWrapper,
  StyledPageNotFoundWrapper,
} from "./PageNotFoundWrapper.styled";
import Image from "next/image";
import img from "assets/img/404.png";

const PageNotFoundWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledPageNotFoundWrapper>
      <StyledPageNotFoundImageWrapper>
        <Image
          src={img}
          alt="Nie znaleziono strony"
          width={1000}
          height={1000}
          className="responsive-contain-img"
        />
      </StyledPageNotFoundImageWrapper>
      {children}
    </StyledPageNotFoundWrapper>
  );
};

export default PageNotFoundWrapper;
