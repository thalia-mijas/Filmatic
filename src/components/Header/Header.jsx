import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [searchMovie, setSearchMovie] = useState("");
  const navigation = useNavigate();

  const handleKeyDown = (event) => {
    console.log(event);
    if (searchMovie != "") {
      if (event.type === "keydown") {
        navigation(`search/${searchMovie.replace(" ", "+")}`);
      }
    } else {
      navigation(`/`);
    }
  };

  return (
    <>
      <div className="cont-header">
        <div className="title">
          <img className="logo" src="/logo.svg" alt="Logo Filmatic" />
          <h1>Filmatic</h1>
        </div>
        <input
          type="text"
          placeholder="Search your movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}

export default Header;
