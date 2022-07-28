import React from "react";
import { StyledProductItem } from "./ProductItem.styled";
import ProductSampleImg from "assets/img/product_item.png";
import Box from "assets/icons/box.svg";
import Image from "next/image";
import Link from "next/link";

const ProductItem = () => {
  return (
    <Link href={"/oferta"}>
      <StyledProductItem>
        <div className="item-img">
          <Image src={ProductSampleImg} layout="responsive" />
        </div>
        <div className="item-content">
          <div className="item-icon">
            <Image src={Box} height={30} width={30} />
          </div>
          <p className="item-title">Title</p>
          <p>
            Short text describing a&nbsp;feature of&nbsp;your product/service.{" "}
          </p>
        </div>
      </StyledProductItem>
    </Link>
  );
};

export default ProductItem;
