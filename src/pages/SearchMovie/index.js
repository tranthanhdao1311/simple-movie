import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../component/MovieCard";
import { TMDBApi } from "../../config";
import classNames from "classnames/bind";
import styles from "./SearchMovie.module.scss";
import Search from "../../component/Search";
import Paginate from "../../component/Paginate";
import ScrollToTop from "component/ScrollToTop";

import usePaginate from "hook/usePaginate";

// import LoadMore from "component/Loadmore";

const cx = classNames.bind(styles);

const SearchMovie = () => {
  const params = useParams();
  const { key } = params;
  const [currentPage, setCurrentPage] = useState(1);

  // Loadmore
  // const {
  //   movies: moviesSearch,
  //   size,
  //   setSize,
  //   data,
  //   error,
  // } = useLoadmore(TMDBApi.getMovieSearchMovie(key));

  const {
    movies: moviesSearch,
    error,
    data,
  } = usePaginate(TMDBApi.getMovieSearchMovie(key, currentPage));

  const loading = !data && !error;

  return (
    <>
      <div className={cx("wrapper")}>
        <Search></Search>

        {loading && <div className={cx("loading")}></div>}
        <p className={cx("title-search")}>Kết quả tìm kiếm với "{key}"</p>
        <div className={cx("item-card")}>
          {!loading &&
            moviesSearch.length > 0 &&
            moviesSearch.map((item) => (
              <MovieCard
                className={cx("custom-card")}
                key={item.id}
                data={item}
              ></MovieCard>
            ))}
        </div>
        {/* <LoadMore onClick={() => setSize(size + 1)}></LoadMore> */}

        <Paginate setCurrentPage={setCurrentPage} data={data}></Paginate>
        <ScrollToTop></ScrollToTop>
      </div>
    </>
  );
};

export default SearchMovie;
