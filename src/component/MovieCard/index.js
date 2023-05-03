import React from "react";
import styles from "./MovieCard.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import images from "../../asset/img";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "component/LoadingSkeleton";

const cx = classNames.bind(styles);

const MovieCard = ({ data }) => {
  const { backdrop_path, original_title, release_date, vote_average, id } =
    data;
  const navigate = useNavigate();

  return (
    <div className={cx("movie-item")}>
      <div className={cx("box-img")}>
        <img
          className={cx("img")}
          src={
            backdrop_path === null
              ? images.noImg
              : `https://image.tmdb.org/t/p/w500/${backdrop_path}`
          }
          alt=""
        />
      </div>

      <div className={cx("info-movie")}>
        <p className={cx("name-movie")}>{original_title}</p>
        <div className={cx("box")}>
          <p className={cx("release year")}>
            {new Date(release_date).getFullYear()}
          </p>
          <p className={cx("rating")}>
            {vote_average}
            <FontAwesomeIcon
              className={cx("icon-star")}
              icon={faStar}
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>

      <Button
        className={cx("bg-color", "w-h")}
        onClick={() => navigate(`/movies/${id}`)}
      >
        Watch Now
      </Button>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return <div>Something went wrong with this component</div>;
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent, // es6
});

export const MovieCardSkeleton = () => {
  return (
    <div className={cx("movie-item")}>
      <div className={cx("box-img")}>
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="8px"
        ></LoadingSkeleton>
      </div>

      <div className={cx("info-movie")}>
        <span className={cx("name-movie")}>
          {" "}
          <LoadingSkeleton width="100%" radius="8px"></LoadingSkeleton>
        </span>
        <div className={cx("box")}>
          <span className={cx("release year")}>
            <LoadingSkeleton
              width="80px"
              height="20px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
          <span className={cx("rating")}>
            <LoadingSkeleton
              width="35px"
              height="20px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
        </div>
      </div>

      <LoadingSkeleton
        width="100%"
        height="50px"
        radius="8px"
      ></LoadingSkeleton>
    </div>
  );
};
