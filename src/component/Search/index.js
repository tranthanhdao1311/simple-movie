import React, { useEffect, useRef, useState } from "react";
import HeadLessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import SearchItem from "../SearchItem";
import useSWR from "swr";
import { fetcher, TMDBApi } from "../../config";
import useDebounce from "../../hook/useDebounce";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Search = ({ setCurrentPage, currentPage }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const debounce = useDebounce(searchValue, 500);
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const refInput = useRef();

  const { data, error } = useSWR(TMDBApi.getMovieSeach(debounce), fetcher);

  useEffect(() => {
    if (!data && !error) {
      setLoading(true);
    } else if (data && data.results) {
      setSearchResult(data.results);
      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const handleSearchValue = (e) => {
    const value = e.target.value;
    if (!value.startsWith(" ")) {
      setSearchValue(value);
    }
  };

  const handleClear = () => {
    setSearchValue("");
    refInput.current.focus();
  };

  const handleClickOutSide = () => {
    setShowResult(false);
  };

  return (
    <div className={cx("wrapper-search")}>
      <HeadLessTippy
        interactive
        appendTo={() => document.body}
        visible={
          showResult && searchValue.length > 0 && searchResult.length > 0
        }
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("search-rusult")} tabIndex="-1" {...attrs}>
            {searchResult.slice(0, 5).map((item) => (
              <SearchItem key={item.id} data={item}></SearchItem>
            ))}

            {searchResult && (
              <div
                className={cx("view-all-moive")}
                onClick={() => {
                  searchResult && navigate(`/timkiem/${debounce}`);
                }}
              >
                Xem tất cả tìm kiếm
              </div>
            )}
          </div>
        )}
        onClickOutside={handleClickOutSide}
      >
        <div className={cx("search")}>
          <input
            ref={refInput}
            value={searchValue}
            className={cx("input")}
            placeholder="Tìm tên phim, diễn viên..."
            onChange={handleSearchValue}
            onFocus={() => setShowResult(true)}
          />
          {!loading && searchValue.length > 0 && (
            <button className={cx("btn-clear")} onClick={handleClear}>
              <FontAwesomeIcon
                className={cx("icon-clear")}
                icon={faCircleXmark}
              ></FontAwesomeIcon>
            </button>
          )}

          {!data && loading && (
            <FontAwesomeIcon
              className={cx("icon-loading")}
              icon={faSpinner}
            ></FontAwesomeIcon>
          )}

          <button
            className={cx("btn-search")}
            onClick={() => {
              debounce && navigate(`/timkiem/${debounce}`);
              setCurrentPage(1);
            }}
          >
            <FontAwesomeIcon
              className={cx("icon-search")}
              icon={faSearch}
            ></FontAwesomeIcon>
          </button>
        </div>
      </HeadLessTippy>
    </div>
  );
};

export default Search;
