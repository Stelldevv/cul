import React from "react";
import { Segment } from "semantic-ui-react";

import logo from "../../assets/images/CULogoEdit.jpg";

const LogoLink = () => {
  return (
    <Segment
      vertical
      style={{
        background: "url(" + logo + ") no-repeat center center",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
        height: "20em"
      }}
    />
  );
};

export default LogoLink;

//MozBoxShadow: "8px 3px 6px 5px #ccc",
//WebkitBoxShadow: "8px 3px 6px 5px #ccc",
//boxShadow: "8px 3px 6px 5px #ccc"
