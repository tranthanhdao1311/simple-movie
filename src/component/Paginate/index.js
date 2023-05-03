import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styles from "./Paginate.module.scss";
import classNames from "classnames/bind";
import ReactPaginate from "react-paginate";

const cx = classNames.bind(styles);

const Paginate = ({ data, setCurrentPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 20;

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };
  return (
    <ReactPaginate
      className={cx("paging")}
      breakLabel="..."
      nextLabel={<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      activeClassName={cx("selected")}
      pageCount={pageCount}
      previousLabel={<FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>}
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
