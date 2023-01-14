import { getAllByAltText } from "@testing-library/react";
import React from "react";
import {respond} from './backend/bundle';


const ClothingPiece = (props) => {

  let rating = respond("business", props.tags);

  return (
    <div className="clothing">
      <div className="clothing-image">
        <img src={props.image} alt="testie" id="items-img"></img>
      </div>
      <div className="content">
        <div className="name">{props.name}</div>
        <div className="tags">{props.tags}</div>
        <div className="rating">{rating}</div>
      </div>
    </div>
  );
};

export default ClothingPiece;

