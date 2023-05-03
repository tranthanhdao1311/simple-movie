import React from "react";
import styles from "./TvSeries.module.scss";
import classNames from "classnames/bind";
import ScrollToTop from "component/ScrollToTop";

const cx = classNames.bind(styles);

const TvSeries = ({ children }) => {
  return (
    <div className={cx("container")}>
      {children}
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default TvSeries;
