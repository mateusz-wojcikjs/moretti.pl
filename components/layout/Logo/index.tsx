import Image from "next/image";
import logo from "assets/img/logo.png";
import Link from "next/link";
import { StyledLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <Link href={"/"}>
      <StyledLogo>
        <Image src={logo} layout="fixed" alt="Moretti.pl logo" />
      </StyledLogo>
    </Link>
  );
};

export default Logo;
