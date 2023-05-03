// import Home from "../pages/Home";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
// import Movies from "../pages/Movies";
// import TvSeries from "../pages/TvSeries";
// import SearchMovie from "../pages/SearchMovie";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const Movies = lazy(() => import("../pages/Movies"));
const TvSeries = lazy(() => import("../pages/TvSeries"));
const SearchMovie = lazy(() => import("../pages/SearchMovie"));

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/movies", component: Movies },
  { path: "/tvseries", component: TvSeries },
  { path: "/movies/:MovieId", component: MovieDetailsPage },
  { path: "/timkiem/:key", component: SearchMovie },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
