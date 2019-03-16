import React from "react";
import "./card.css";

function Card (title, subtitle, authors, link, description, image, handleBookSave) {

  return (

    <div className="card border border-success mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img alt={title} src={image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {subtitle && <h6 className="font-italic">{subtitle}</h6>}
            <p className="card-text">Authors: {authors}</p>
            <p className="card-text">Description: {description}</p>
            <a href={link} target="_blank" className="btn btn-sm btn-dark">View</a>
            <a href="#" onClick={handleBookSave} className="btn btn-sm btn-dark">Save</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


