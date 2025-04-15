import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import List from "../List/List.jsx";
import Details from "../Details/Details.jsx";
import Searcher from "../Searcher/Searcher.jsx";
import NotFound from "../NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="movie/:id" element={<Details />}></Route>
        <Route path="search/:elect" element={<Searcher />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
