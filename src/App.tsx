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
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
