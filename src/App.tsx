import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MutatingDots } from "react-loader-spinner";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

import { NewsModalContext } from "./context/NewsModalContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContestsPage = lazy(() => import("./pages/ContestsPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const RulesPage = lazy(() => import("./pages/RulesPage/RulesPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const styles = {
  wrapper: `w-full select-none flex flex-col flex-auto gap-56 overflow-hidden relative`,
  loaderContainer: `w-screen h-screen flex items-center justify-center bg-white`,
};

function App() {
  const { isShow } = useContext(NewsModalContext);

  return (
    <div
      className={styles.wrapper}
      style={isShow ? { maxHeight: "100vh" } : { maxHeight: "max-content" }}
    >
      <BrowserRouter>
        <Suspense
          fallback={
            <div className={styles.loaderContainer}>
              <MutatingDots
                height="100"
                width="100"
                color="#2790cb"
                secondaryColor="#2790cb"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
        >
          <Header />
          <Routes>
            <Route path="/chicken-game/" element={<HomePage />} />
            <Route path="/chicken-game/contests" element={<ContestsPage />} />
            <Route path="/chicken-game/news" element={<NewsPage />} />
            <Route path="/chicken-game/about" element={<AboutPage />} />
            <Route path="/chicken-game/feedback" element={<FeedbackPage />} />
            <Route path="/chicken-game/statistics"element={<StatisticsPage />}/>
            <Route path="/chicken-game/support" element={<SupportPage />} />
            <Route path="/chicken-game/rules" element={<RulesPage />} />
            <Route path="/chicken-game/reviews" element={<ReviewsPage />} />
            <Route path="/chicken-game/user-page" element={<UserPage />} />
            <Route path="/chicken-game/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
