import React from "react";
import { StyledProductItem } from "./ProductItem.styled";
import Box from "icons/box";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { IProductItem } from "interfaces/product.interface";
import ProductSampleImg from "assets/img/product_item.png";

const ProductItem = ({ name, descriptionTop, thumbnail }: IProductItem) => {
  const getUrl = (img: any) => {
    if (img) {
      const { small } = img.data.attributes.formats;
      return process.env.BASE_URL + small.url;
    }
    return false;
  };
  const url = getUrl(thumbnail);
  return (
    <Link href={`/oferta/${slugify(name).toLowerCase()}`}>
      <StyledProductItem>
        <div className="item-img-mask">
          <div className="item-img">
            <Image
              src={url || ProductSampleImg}
              alt={name}
              fill
              className="responsive-cover-img"
            />
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
