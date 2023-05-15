import React, { useEffect, useState } from "react";

import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { fetcher, TMDBApi } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "component/LoadingSkeleton";

const cx = classNames.bind(styles);

const Banner = () => {
  SwiperCore.use([Autoplay]);
  const navigate = useNavigate();

  const [banner, setBanner] = useState([]);

  const { data, error } = useSWR(TMDBApi.getBanner(), fetcher);

  const isLoading = !data && !error;

  useEffect(() => {
    if (data && data.results) {
      setBanner(data.results);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={cx("banner")}>
      {isLoading && (
        <>
          <Swiper
            autoplay={{ delay: 4000 }}
            grabCursor={"true"}
            slidesPerView={"auto"}
          >
            <SwiperSlide>
              <BannerSkeleton></BannerSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper
          // autoplay={{ delay: 4000 }}
          grabCursor={"true"}
          slidesPerView={"auto"}
        >
          {banner.length > 0 &&
            banner.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={cx("overplay")}></div>
                <img
                  className={cx("img")}
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <div className={cx("info-movie")}>
                  <h1 className={cx("tilte-movie")}>{item.original_title}</h1>
                  <p className={cx("release_date")}>
                    {new Date(item.release_date).getFullYear()}
                  </p>
                  <Button
                    className={cx("btn-play")}
                    onClick={() => navigate(`/movies/${item.id}`)}
                  >
                    Watch
                  </Button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default Banner;

const BannerSkeleton = () => {
  return (
    <div className={cx("banner")}>
      <Swiper
        autoplay={{ delay: 4000 }}
        grabCursor={"true"}
        slidesPerView={"auto"}
      >
        <SwiperSlide>
          <LoadingSkeleton
            width="100%"
            height="400px"
            radius="8px"
          ></LoadingSkeleton>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
