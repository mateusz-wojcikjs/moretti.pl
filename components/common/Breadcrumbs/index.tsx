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
          <>
            <span className="arrow-breadcrumb">&#10095;</span>
            <span className="current-breadcrumb">
              {element.replace("-", " ")}
            </span>
          </>
        ) : (
          <>
            <span className="arrow-breadcrumb">&#10095;</span>
            <Link key={i} href={`/${element}`}>
              <a className="">{element.replace("-", " ")}</a>
            </Link>
          </>
        );
      })}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
