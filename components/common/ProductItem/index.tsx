import React from "react";
import { StyledProductItem } from "./ProductItem.styled";
import ProductSampleImg from "assets/img/product_item.png";
import Box from "icons/box";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { IProductItem } from "interfaces/product.interface";

const ProductItem = ({ name, descriptionTop }: IProductItem) => {
  return (
    <Link href={`/oferta/${slugify(name).toLowerCase()}`}>
      <StyledProductItem>
        <div className="item-img-mask">
          <div className="item-img">
            <Image src={ProductSampleImg} layout="responsive" />
          </div>
        </div>
        <div className="item-content">
          <div className="item-icon">
            <Box />
          </div>
          <p className="item-title">{name}</p>
          <p>{descriptionTop.slice(0, 200)}</p>
        </div>
      </StyledProductItem>
    </Link>
  );
};

export default ProductItem;
