import React from "react";
import classNames from "classnames/bind";
import styles from "./SearchItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const SearchItem = ({ data }) => {
  return (
    <div className={cx("wrapper")}>
      <Link to={`/movies/${data.id}`} className={cx("search-item")}>
        <div className={cx("info-movie")}>
          <p>{data.title}</p>
          <p> {new Date(data.release_date).getFullYear()}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
