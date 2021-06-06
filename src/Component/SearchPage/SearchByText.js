import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SearchByText = () => {
  const history = useHistory();
  const [Query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const performSearch = () => {
    if (Query.length === 0) return;
    setQuery("");
    history.push(`/search?query=${Query}`);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };
  return (
    <div className="d-flex ml-lg-3" style={{ width: "20rem" }}>
      <FormControl
        type="text"
        value={Query}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        placeholder="Search by Name, Board, City"
      />
      <div
        className="d-flex  justify-content-center align-items-center srch"
        onClick={performSearch}
      >
        <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default SearchByText;
