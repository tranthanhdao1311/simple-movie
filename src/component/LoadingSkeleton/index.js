import React from "react";
import classNames from "classnames/bind";
import styles from "./Skeleton.module.scss";

const cx = classNames.bind(styles);

const LoadingSkeleton = (props) => {
  return (
    <div
      className={cx("skeleton")}
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
