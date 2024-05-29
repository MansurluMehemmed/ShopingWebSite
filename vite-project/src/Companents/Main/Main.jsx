import React from "react";
import "./Main.css";
import { Slide } from "./Slide/Slide";
import { Bunner } from "./Bunner/Bunner";
import { Card } from "./Cards/Card";
import { Category } from "./Category/Category";
import { Latest } from "./Latest Blogs/Latest";
import { Subscribe } from "./Subscribe/Subscribe";
import { FavoriList } from "../FavoriList/FavoriList";
import { UserInfo } from "../UserInfo/UserInfo";

export const Main = () => {
  return (
    <main>
      <Slide />
      <Bunner />
      <h1
        style={{
          fontSize: "40px",
          marginTop: "74px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        New Arrivals
        <p
          style={{
            background: "red",
            display: "block",
            width: "100px",
            height: "5px",
          }}
        ></p>
      </h1>
      <Category />
      <Card />
      <Latest />
      <Subscribe />
      <UserInfo/>
    </main>
  );
};
