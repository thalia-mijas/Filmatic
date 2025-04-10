import { Routes, Route } from "react-router-dom";
import "./App.css";
import List from "../List/List.jsx";
import Details from "../Details/Details.jsx";

function App() {
  return (
    <>
      <div className="title">
        <img className="logo" src="/logo.svg" alt="Logo Filmatic" />
        <h1>Filmatic</h1>
      </div>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="detail/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
