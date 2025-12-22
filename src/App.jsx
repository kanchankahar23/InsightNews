import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ShowNews from "./pages/ShowNews";
import NewsDetail from "./pages/NewsDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<ShowNews />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
