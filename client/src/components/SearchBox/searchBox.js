import React from "react";
import "./searchBox.css";

function SearchBox({searchTerm, handleInputChange, handleFormSubmit}) {

  return (
    < form className="searchBox shadow-sm border border-success rounded">
      <div className="form-group" >
        <label htmlFor="bookTitle">Book Search</label>
        <input 
        type="text" 
        className="form-control" 
        id="bookInput" 
        value={searchTerm}
        placeholder="Enter a book name" 
        onChange={handleInputChange} 
        name="searchTerm"
        required 
        />
      </div>
      <button type="submit" 
      className="btn btn-primary btn-sm" 
      onClick={handleFormSubmit}>
      Search
      </button>
    </form >
  );
};

export default SearchBox;
