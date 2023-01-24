import React from "react";
import Image from "next/image";
import { StyledGirdGallery } from "./GridGallery.styled";

// If you want you can use SCSS instead of css
// import plugins if you need
import { BsZoomIn } from "react-icons/bs";
import { ImageProps } from "interfaces/product.interface";
import { useImageViewer } from "react-image-viewer-hook";

const GridGallery = ({ content }: { content: ImageProps[] }) => {
  const { getOnClick, ImageViewer } = useImageViewer();
  return (
    <>
      <StyledGirdGallery>
        <div className="lg-react-element">
          {content.map((image) => {
            const thumbnail =
              process.env.BASE_URL + image.attributes.formats.medium.url;
            const img = process.env.BASE_URL + image.attributes.url;
            return (
              <div key={image.attributes.hash} className="gallery-item">
                <a onClick={getOnClick(img)}>
                  <i>
                    <BsZoomIn />
                  </i>
                  <Image
                    src={thumbnail}
                    alt={image.attributes.alternativeText}
                    height={800}
                    width={800}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </StyledGirdGallery>
      <ImageViewer />
    </>
  );
};
export default GridGallery;
