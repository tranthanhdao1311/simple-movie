import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Header = () => {
  const active = ({ isActive }) => (isActive ? cx("active") : "");
  return (
    <Fragment>
      <header className={cx("header")}>
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink className={active} to="/movies">
          Movies
        </NavLink>
        <NavLink className={active} to="/tvseries">
          TV Series
        </NavLink>
      </header>
    </Fragment>
  );
};

export default Header;
