import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import MovieList from "../../component/MovieList";
import "../../component/GlobalStyle";
import ScrollToTop from "component/ScrollToTop";

const cx = classNames.bind(styles);
const Home = ({ children }) => {
  return (
    <>
      <div className={cx("container")}>
        {children}
        <div>
          <h1 className={cx("title")}>Now Playing</h1>
          <MovieList></MovieList>
        </div>
        <div>
          <h1 className={cx("title")}>Top rated movies</h1>
          <MovieList type={"top_rated"}></MovieList>
        </div>
        <div>
          <h1 className={cx("title")}>Top trending</h1>
          <MovieList type={"popular"}></MovieList>
        </div>
        <ScrollToTop></ScrollToTop>
      </div>
    </>
  );
};

export default Home;
