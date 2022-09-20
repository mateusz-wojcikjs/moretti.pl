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
      return "http://localhost:1337" + small.url;
    }
    return false;
  };
  const url = getUrl(thumbnail);
  return (
    <Link href={`/oferta/${slugify(name).toLowerCase()}`}>
      <a>
        <StyledProductItem>
          <div className="item-img-mask">
            <div className="item-img">
              <Image
                src={url || ProductSampleImg}
                layout="responsive"
                height="100%"
                width="100%"
                alt={name}
                objectFit="cover"
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
      </a>
    </Link>
  );
};

export default ProductItem;
