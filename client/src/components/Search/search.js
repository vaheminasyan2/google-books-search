import React from "react";
import "./search.css";

function Search(props) {

  return (
    < form className="searchBox border border-success">
      <div className="form-group" >
        <label for="bookTitle">Book Search</label>
        <input type="text" className="form-control" id="bookInput"  placeholder="Enter a book name" />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Search</button>
    </form >
  );
};

export default Search;
