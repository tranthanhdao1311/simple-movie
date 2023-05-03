import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./ScrollToTop.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const srcollButton = () => {
    const srcolled = document.documentElement.scrollTop;
    if (srcolled > 300) {
      setVisible(true);
    } else if (srcolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", srcollButton);

  const srcollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={cx("scoll-top")}
      onClick={() => srcollToTop()}
      style={{ display: visible ? "block" : "none" }}
    >
      <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
    </div>
  );
};

export default ScrollToTop;
