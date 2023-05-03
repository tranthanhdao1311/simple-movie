import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <div>
      <button
        className={cx("btn-play", className)}
        onClick={onClick}
        type={type}
      >
        {children}
        <FontAwesomeIcon
          className={cx("icon-play")}
          icon={faPlayCircle}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Button;
