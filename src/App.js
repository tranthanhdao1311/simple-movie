import { Fragment, Suspense } from "react";
import { publicRoutes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./index.module.scss";
import "swiper/scss";
import "swiper/scss/autoplay";
import Banner from "./component/Banner";

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = MainLayout;

              if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page>
                        <Banner></Banner>
                      </Page>
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    </Fragment>
  );
}

export default App;
