import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
const Header = ({ submitHandler, location, setLocation }) => {
  return (
    <header className="header">
      <form className="header__search_form" onSubmit={submitHandler}>
        <div className="header_search_container">
          <input
            spellCheck="false"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <span className="header_search_icon" onClick={submitHandler}>
            <BsSearch />
          </span>
        </div>
      </form>
    </header>
  );
};

export default Header;
