import React, { useEffect, useState } from "react";
import { Slide } from "./Slide";
import './SingleProd.css'
import { useDispatch, useSelector } from "react-redux";
import { add, qualityMinus, qualityPlus } from "../../State/Slice/CardSlice";
export const SingleProd = () => {
  const single = useSelector(state=>state.fetch.singleProd)
  const dispatch = useDispatch()
 
  const quality = useSelector(state=>state.cart.quality);
  const [qualitySpan,setQualitySpan] = useState(1)

  return (
    <div className="single-container">
      {single.map(item=>{
        return(
          <div className="divsingle">
        <div className="divimg">
          <Slide />
        </div>
        <div className="divinfo">
          <h2>{item.title}</h2>
          <p>
            {item.description}
          </p>
          <button className="delivery-botton" type="button">Free Delivery</button>
          <span className="span-price">{item.price} $</span>
          <div className="divbottom">
           <div className="quality">
           <p> Quality: </p>
            <div className="divquality">
              <div className="divqualitycont">
              <button onClick={()=>{
                if(qualitySpan>1){
                  setQualitySpan(qualitySpan-1)
                }
                dispatch(qualityMinus())
              }} type="button">-</button>
              <span>{qualitySpan}</span>
              <button onClick={()=>{
                dispatch(qualityPlus({...item,count:1}))
                setQualitySpan(qualitySpan+1)
              }} type="button">+</button>
              </div>
            </div>
           </div>
            <button onClick={()=>{
              quality.map(item=>{
                dispatch(add({...item}))
              })
            }} className="add-button" type="button">
              Add to Cart
            </button>
            
          </div>
        </div>
      </div>
        )
      })}
    </div>
  );
};
