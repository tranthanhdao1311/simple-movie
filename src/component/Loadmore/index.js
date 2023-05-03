import React from "react";
import styles from "./Loadmore.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoadMore = ({ onClick }) => {
  // Load-more
  // const url = TMDBApi.getMovie("popular");
  // const { data, size, setSize } = useSWRInfinite(
  //   (index) => url.replace("page=1", `page=${index + 1}`),
  //   fetcher
  // );

  // Data Load-more
  // const rusults = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  // setMovies(rusults);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <div className={cx("box-btn-load")}>
      <button className={cx("btn-loadmore")} onClick={onClick}>
        Load more...
      </button>
    </div>
  );
};

export default LoadMore;
