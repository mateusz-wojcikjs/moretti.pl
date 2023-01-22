import Image from "next/image";
import logo from "assets/img/logo.png";
import Link from "next/link";
import { StyledLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <Link href={"/"}>
      <StyledLogo>
        <Image
          src={logo}
          width={150}
          height={150}
          alt="Moretti.pl logo"
          className="responsive-img"
        />
      </StyledLogo>
    </Link>
  );
};

export default Logo;
