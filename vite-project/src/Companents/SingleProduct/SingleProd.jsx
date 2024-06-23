import React from "react";
import { Slide } from "./Slide";
import './SingleProd.css'
export const SingleProd = () => {
  return (
    <div className="single-container">
      <div className="divsingle">
        <div className="divimg">
          <Slide />
        </div>
        <div className="divinfo">
          <h2>Pocket cotton sweatshirt</h2>
          <p>
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            solicitud felis. Pellentesque diam dolor, elementum etos lobortis
            des mollis ut...
          </p>
          <button type="button">Free Delivery</button>
          <span>Price</span>
          <div className="divbottom">
            <p> Quality: </p>
            <div className="divquality">
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
            <button className="add-button" type="button">
              Add to Cart
            </button>
            <label className="container" for="favorite">
              <svg
                className="feather feather-heart"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <div className="action">
                <span className="option-1">Add to Favorites</span>
                <span className="option-2">Added to Favorites</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
