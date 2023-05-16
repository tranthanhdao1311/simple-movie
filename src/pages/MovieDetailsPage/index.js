import React from "react";
import styles from "./MovieDetailsPage.module.scss";
import classNames from "classnames/bind";
import useSWR from "swr";
import { fetcher, TMDBApi } from "../../config";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../../component/MovieCard";
import ScrollToTop from "component/ScrollToTop";

const cx = classNames.bind(styles);

const MovieDetailsPage = () => {
  const params = useParams();
  const { MovieId } = params;
  const { data } = useSWR(TMDBApi.getMovieDetails(MovieId), fetcher);

  if (!data) return null;
  const genres = data.genres;

  return (
    <>
      <div className={cx("container")}>
        <div
          className={cx("background-img")}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              data && data.backdrop_path
            })`,
          }}
        ></div>
        <div className={cx("overlay")}></div>
        <div className={cx("box-img")}>
          <img
            className={cx("img")}
            src={`https://image.tmdb.org/t/p/original/${
              data && data.poster_path
            }`}
            alt=""
          />
        </div>
        <h1 className={cx("name-movie")}>{data.title}</h1>

        {genres.length > 0 && (
          <div className={cx("box-cate")}>
            {genres.map((item) => (
              <button className={cx("category-movie")} key={item.id}>
                {item.name}
              </button>
            ))}
          </div>
        )}

        <div className={cx("description")}>{data.overview}</div>
        <MovieMeta type="credits"></MovieMeta>
        <MovieMeta type="videos"></MovieMeta>
        <MovieMeta type="similar"></MovieMeta>
        {/* <MovieCredits></MovieCredits>
        <MovieVideos></MovieVideos> */}
        {/* <SimilarMovies></SimilarMovies> */}
      </div>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

function MovieMeta({ type }) {
  const params = useParams();
  const { MovieId } = params;

  const { data } = useSWR(TMDBApi.getMovieMeta(MovieId, type), fetcher);

  if (!data) return null;
  const { cast, results } = data;
  if (type === "credits") {
    if (!cast || cast.length <= 0) return null;
    return (
      <div>
        <h2 className={cx("title-cast")}>Cast</h2>
        <div className={cx("box-cast")}>
          {cast.slice(0, 4).map((item) => (
            <div className={cx("cast-item")} key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  item && item.profile_path
                }`}
                alt=""
              />
              <h2 className={cx("name-cast")}>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === "videos") {
    if (!results || results.length <= 0) return null;
    return (
      <div className={cx("box-movie")}>
        {results.slice(0, 3).map((item) => (
          <div className={cx("movie-item")} key={item.id}>
            <div className={cx("movie-video")}>
              <iframe
                width="885"
                height="498"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className={cx("name-video")}>Video: {item.name}</h3>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className={cx("movie-list")}>
        <h1 className={cx("title-similar")}>Similar Movies</h1>

        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={5}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide style={{ width: "240px" }} key={item.id}>
                <MovieCard
                  className={cx("custom-card")}
                  data={item}
                ></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  }
}

function MovieCredits() {
  const params = useParams();
  const { MovieId } = params;
  const { data } = useSWR(TMDBApi.getMovieMeta(MovieId, "credits"), fetcher);

  if (!data) return null;
  const { cast } = data;

  if (!cast || cast.length <= 0) return null;
  return (
    <div>
      <h2 className={cx("title-cast")}>Cast</h2>
      <div className={cx("box-cast")}>
        {cast.slice(0, 4).map((item) => (
          <div className={cx("cast-item")} key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                item && item.profile_path
              }`}
              alt=""
            />
            <h2 className={cx("name-cast")}>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const params = useParams();
  const { MovieId } = params;

  const { data } = useSWR(TMDBApi.getMovieMeta(MovieId, "videos"), fetcher);

  if (!data) return null;
  const { results } = data;

  if (!results || results.length <= 0) return null;
  return (
    <div className={cx("box-movie")}>
      {results.slice(0, 3).map((item) => (
        <div className={cx("movie-item")} key={item.id}>
          <div className={cx("movie-video")}>
            <iframe
              width="885"
              height="498"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className={cx("name-video")}>Video: {item.name}</h3>
        </div>
      ))}
    </div>
  );
}

function SimilarMovies() {
  const params = useParams();
  const { MovieId } = params;

  const { data } = useSWR(TMDBApi.getMovieMeta(MovieId, "similar"), fetcher);

  if (!data) return null;
  const { results } = data;
  console.log(results);

  if (!results || results.length <= 0) return null;
  return (
    <div className={cx("movie-list")}>
      <h1 className={cx("title-similar")}>Similar Movies</h1>

      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {results.length > 0 &&
          results.map((item) => (
            <SwiperSlide style={{ width: "240px" }} key={item.id}>
              <MovieCard data={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MovieDetailsPage;
