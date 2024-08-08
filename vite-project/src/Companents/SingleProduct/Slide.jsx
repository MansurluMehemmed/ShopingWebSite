import React from "react";
import { useSelector } from "react-redux";

export const Slide = () => {
  const single = useSelector((state) => state.fetch.singleProd);
  const img = single.map(item=>item.images)
  return (
    <div>
      {img.map((item,i) => {
         return (
          <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={item} class="d-block w-100" alt="..." />
              </div>
              {/* <div class="carousel-item">
            <img src={item[1]} class="d-block w-100" alt="..." />
          </div> */}
          {/* <div class="carousel-item">
            <img src={item.images} class="d-block w-100" alt="..." />
          </div> */}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            ></button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            ></button>
          </div>
        );
      })}
    </div>
  );
};
