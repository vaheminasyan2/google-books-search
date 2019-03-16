import React from "react";
import "./cardSaved.css";

function CardSaved(props) {

  return (

    <div className="card border border-success mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Book title</h5>
            <p className="card-text">Authors: </p>
            <p className="card-text">Description: </p>
            <a href="#" className="btn btn-sm btn-dark">View</a>
            <a href="#" className="btn btn-sm btn-dark">Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSaved;


