import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { char = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(char);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?char=${inputValue}`);
  };

  useEffect(() => {
    if (inputValue.trim() !== "") {
      const val = inputValue.toLocaleLowerCase();
      const chars2LowerCase = Characters.filter((char) =>
        char.name.toLocaleLowerCase().includes(val)
      );
      setCharacters(chars2LowerCase);
    } else {
      setCharacters([]);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h2>Search</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Character:{" "}
              <input
                placeholder="Insert the name..."
                type="text"
                className="form-control"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-info w-100">
              Search
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Results: {characters.length}</h2>
          {!characters.length && (
            <div className="alert alert-warning text-center">
              Please search a character
            </div>
          )}
          {characters.map((char) => (
            <Card key={char.id} {...char} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
