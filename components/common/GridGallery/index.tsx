import React from "react";
import { StyledGirdGallery } from "./GridGallery.styled";
import Image from "next/image";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { BsZoomIn } from "react-icons/bs";
import { ImageProps } from "interfaces/product.interface";

const GridGallery = ({ content }: { content: ImageProps[] }) => {
  return (
    <StyledGirdGallery>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {content.map((image) => {
          const thumbnail =
            process.env.BASE_URL + image.attributes.formats.medium.url;
          const img = process.env.BASE_URL + image.attributes.url;
          return (
            <a key={image.attributes.hash} className="gallery-item" href={img}>
              <i>
                <BsZoomIn />
              </i>
              <Image
                src={thumbnail}
                alt={image.attributes.alternativeText}
                layout="fill"
              />
            </a>
          );
        })}
      </LightGallery>
    </StyledGirdGallery>
  );
};

export default GridGallery;
