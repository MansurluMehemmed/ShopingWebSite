import React from "react";
import "./Subscribe.css";
export const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="sub-container">
        <div className="divSub">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className="input-group">
          <input
            type="email"
            className="input"
            id="Email"
            name="Email"
            placeholder="uiverse@verse.io"
            autocomplete="off"
          />
          <input className="button--submit" value="Subscribe" type="submit" />
        </div>
      </div>
    </div>
  );
};
