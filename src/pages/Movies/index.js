import React, { useState } from "react";
import styles from "./Movies.module.scss";
import classNames from "classnames/bind";
import MovieCard from "../../component/MovieCard";
import Search from "../../component/Search";
import Paginate from "../../component/Paginate";
import ScrollToTop from "component/ScrollToTop";
import { TMDBApi } from "config";
import usePaginate from "hook/usePaginate";

// import useSWRInfinite from "swr/infinite";
// import LoadMore from "component/Loadmore";

const cx = classNames.bind(styles);

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Phan trang
  const { movies, data } = usePaginate(
    TMDBApi.getMovie("popular", currentPage)
  );

  //Loadmore
  // const { movies, size, setSize } = useLoadmore(TMDBApi.getMovie("popular"));

  return (
    <div className={cx("container")}>
      <Search></Search>
      <div className={cx("movie-list")}>
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} data={item}></MovieCard>
          ))}
      </div>
      {/* <LoadMore onClick={() => setSize(size + 1)}></LoadMore> */}
      <Paginate data={data} setCurrentPage={setCurrentPage}></Paginate>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default Movies;
