import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page from "./pages/page/page";
import Culture from "./pages/page/kakao/kakaoCulture";
import Subsidiary from "./pages/page/kakao/subsidiaryCompany";
import History from "./pages/page/kakao/history";
import News from "./pages/page/news/news";
import Tech from "./pages/page/service/tech";
import Service from "./pages/page/service/service";
import ESG from "./pages/page/responsible/esg";
import Social from "./pages/page/responsible/social";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/kakaoCulture" element={<Culture />} />
        <Route path="/subsidiaryCompany" element={<Subsidiary />} />
        <Route path="/history" element={<History />} />
        <Route path="/news" element={<News />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/service" element={<Service />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </>
  );
}

export default App;
