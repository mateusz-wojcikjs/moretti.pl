import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledBreadcrumbs } from "./Breadcrumbs.styled";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathElements = router.asPath.split("/");
  return (
    <StyledBreadcrumbs>
      {pathElements.map((element, i) => {
        return element === "" ? (
          <Link key={i} href="/">
            Home
          </Link>
        ) : i === pathElements.length - 1 ? (
          <React.Fragment key={i}>
            <span className="arrow-breadcrumb">&#10095;</span>
            <span className="current-breadcrumb">
              {element.replaceAll("-", " ")}
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment key={i}>
            <span className="arrow-breadcrumb">&#10095;</span>
            <Link href={`/${element}`}>{element.replaceAll("-", " ")}</Link>
          </React.Fragment>
        );
      })}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
