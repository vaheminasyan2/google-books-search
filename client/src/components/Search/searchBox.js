import React from "react";
import "./searchBox.css";

function SearchBox({searchTerm, handleInputChange, handleFormSubmit}) {

  return (
    < form className="searchBox border border-success">
      <div className="form-group" >
        <label for="bookTitle">Book Search</label>
        <input type="text" className="form-control" id="bookInput" value={searchTerm} placeholder="Enter a book name" onChange={handleInputChange} required />
      </div>
      <button type="submit" className="btn btn-primary btn-sm" onClick={handleFormSubmit}>Search</button>
    </form >
  );
};

export default SearchBox;
