import React from "react";
import { Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <div className="">
      <h3 className="text-center footer-primary">Social Link</h3>
      <div className="d-flex flex-column ">
        <Link className="text-decoration-none fs-4 footer-primary">
          Facebook
        </Link>
        <Link className="text-decoration-none fs-4 footer-primary">
          Instagram
        </Link>
        <Link className="text-decoration-none fs-4 footer-primary">
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default FooterRight;
