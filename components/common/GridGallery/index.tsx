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

import img1 from "assets/img/wagi/20200731_160925.jpg";
import img2 from "assets/img/wagi/20200731_160919.jpg";
import img3 from "assets/img/wagi/20190826_154433.jpg";

const GridGallery = () => {
  return (
    <StyledGirdGallery>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20200731_160925.3361670d.jpg&w=3840&q=75">
          <Image src={img1} />
        </a>
        <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20200731_160919.6f610629.jpg&w=3840&q=75">
          <Image src={img2} />
        </a>
        <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F20190826_154433.59755afd.jpg&w=3840&q=75">
          <Image src={img3} />
        </a>
      </LightGallery>
    </StyledGirdGallery>
  );
};

export default GridGallery;
