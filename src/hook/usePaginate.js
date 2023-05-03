import { fetcher } from "config";
import { useEffect, useState } from "react";
import useSWR from "swr";

const usePaginate = (meta) => {
  const [movies, setMovies] = useState([]);

  const url = `${meta}`;
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    //  Data Phan trang
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  return {
    movies,
    error,
    data,
  };
};

export default usePaginate;
