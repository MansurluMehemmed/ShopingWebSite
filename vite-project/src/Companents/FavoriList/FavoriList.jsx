
import "./FavoriList.css";
import { useDispatch, useSelector } from "react-redux";
import {  favoriteAdd, favoriteDlt } from "../../State/Slice/FavoriteSlice";
import { add } from "../../State/Slice/CardSlice";
export const FavoriList = () => {
  const favorite = useSelector((state) => state.favori.list);
  // console.log(favorite, "favorite");
  const dispatch = useDispatch();
  return <>
    <div className="favori-container">
      {favorite.map((item) => {
        return (
          <div className="card-fav">
            <label
              
              className="ui-like"
            >
              <input type="checkbox" />
              <div className="like" onClick={()=>{
                dispatch(favoriteAdd(item))
              }} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill=""
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                  </g>
                </svg>
              </div>
            </label>
            <div className="card-img">
              <img src={item.images} alt="" />
            </div>
            <div className="card-info">
              <p className="text-title">{item.title} </p>
              <p className="text-body">{item.description}</p>
            </div>
            <div className="card-footer">
              <span className="text-title">${item.price}</span>

              <div
                className="card-button"
                onClick={() =>
                  dispatch(
                    add({
                      id: item.id,
                      title: item.title,
                      images: item.images,
                      price: item.price,
                      count: 0,
                    })
                  )
                }
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                  <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>

  </>
};
