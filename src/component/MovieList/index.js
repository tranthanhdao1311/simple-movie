import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";
import styles from "./MovieList.module.scss";
import classNames from "classnames/bind";
import "swiper/scss";
import { fetcher, TMDBApi } from "../../config";
import useSWR from "swr";
import { MovieCardSkeleton } from "../MovieCard";
const cx = classNames.bind(styles);

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(TMDBApi.getMovie(type), fetcher);
  const [widthWindow, setWidthWindow] = useState();

  function handleResize() {
    const width = window.innerWidth;
    setWidthWindow(width);
  }

  window.addEventListener("resize", handleResize);

  const isLoading = !data && !error;

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={cx("movie-list")}>
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={5}>
            <SwiperSlide style={{ width: "240px" }}>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide style={{ width: "240px" }}>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide style={{ width: "240px" }}>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide style={{ width: "240px" }}>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide style={{ width: "240px" }}>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={widthWindow ? (widthWindow > 769 ? 5 : 2) : 5}
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide
                style={{ width: "240px", marginRight: "10px !important" }}
                key={item.id}
              >
                <MovieCard data={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default MovieList;
