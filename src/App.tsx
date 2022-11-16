import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContestsPage from "./pages/ContestsPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import FeedbackPage from "./pages/FeedbackPage";
import StatisticsPage from "./pages/StatisticsPage";
import SupportPage from "./pages/SupportPage";
import RulesPage from "./pages/RulesPage/RulesPage";
import ReviewsPage from "./pages/ReviewsPage";
import NotFound from "./pages/NotFound";

const styles = {
  wrapper: `w-full select-none flex flex-col flex-auto gap-56 overflow-hidden relative`,
};

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/chicken-game/contests" element={<ContestsPage />} />
          <Route path="/chicken-game/news" element={<NewsPage />} />
          <Route path="/chicken-game/about" element={<AboutPage />} />
          <Route path="/chicken-game/feedback" element={<FeedbackPage />} />
          <Route path="/chicken-game/statistics" element={<StatisticsPage />} />
          <Route path="/chicken-game/support" element={<SupportPage />} />
          <Route path="/chicken-game/rules" element={<RulesPage />} />
          <Route path="/chicken-game/reviews" element={<ReviewsPage />} />
          <Route path="/chicken-game/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
