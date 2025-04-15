import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import List from "../List/List.jsx";
import Details from "../Details/Details.jsx";
import Searcher from "../Searcher/Searcher.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="details/:id" element={<Details />}></Route>
        <Route index path="search/:elect" element={<Searcher />}></Route>
      </Routes>
    </>
  );
}

export default App;
