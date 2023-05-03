import React, { Fragment } from "react";
import Header from "../Header";
import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";

const cx = classNames.bind(styles);
const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <div className={cx("content")}>{children}</div>
    </Fragment>
  );
};

export default MainLayout;
