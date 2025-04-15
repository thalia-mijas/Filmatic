import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";
import Searcher from "./pages/Searcher/Searcher.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<Details />}></Route>
        <Route path="search/:elect" element={<Searcher />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
