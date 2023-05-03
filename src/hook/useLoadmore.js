import { fetcher } from "config";
import { useEffect } from "react";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

const useLoadmore = (meta) => {
  const [movies, setMovies] = useState([]);

  // Load-more
  const url = `${meta}`;
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );
  // Data Load-more
  useEffect(() => {
    const rusults = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
    setMovies(rusults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    movies,
    size,
    setSize,
    data,
    error,
  };
};

export default useLoadmore;
