import React from "react";
import "./cardSaved.css";

function CardSaved({title, subtitle, authors, link, description, image, Button}) {

  return (

    <div className="card shadow-sm mb-3">
      <div className="row no-gutters">
        <div className="col-md-2 text-center">
          <img alt={title} src={image} />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {subtitle && <h6 className="font-italic">{subtitle}</h6>}
            <p className="card-text">Authors: {authors}</p>
            <p className="card-text">Description: {description}</p>
            <a href={link} target="_blank" className="btn btn-sm btn-dark">View</a>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSaved;


