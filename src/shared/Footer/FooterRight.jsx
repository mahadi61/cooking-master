import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <div className="mb-2">
      <h3 className="text-center footer-primary text-decoration-underline">
        Social Link
      </h3>
      <div className="d-flex flex-column ">
        <Link className="text-decoration-none fs-4 footer-primary">
          <BsFacebook className="fs-5 me-2  text-danger" />
          Facebook
        </Link>
        <Link className="text-decoration-none fs-4 footer-primary">
          <BsInstagram className="fs-5 me-2 text-danger" />
          Instagram
        </Link>
        <Link className="text-decoration-none fs-4 footer-primary">
          <BsTwitter className="fs-5 me-2 text-danger" />
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default FooterRight;
