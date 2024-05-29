import React from "react";
import "./Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePay } from "../../State/Slice/PaySlice";
import { Link } from "react-router-dom";
export const Payment = () => {
  const pay = useSelector((state) => state.pay.list);
  const dispatch = useDispatch()
  console.log(pay, "pay");
  const payment = useSelector(state=>state.pay.list)
  let total = 0;
  payment.forEach(item => {
  let  hasil = item.count*item.price;
    total += hasil
    // console.log(total)
  });
  return (
    <div className="payment-container">
      <div className="pay">
      <div className="divpayment">
        {pay.map((item) => {
          console.log(item.id);
          return (
            <div className="div-payment" key={item.id}>
              <div className="imgandtitle">
                <div className="divimgcount">
                  <img src={item.images} alt="" />
                  <span>{item.count}</span>
                </div>
                <div className="divtitle">
                  <p className="title">{item.title} </p>
                  <p className="price">  ${item.price} </p>
                </div>
              </div>
              <p>{item.count*item.price}$</p>
            </div>
          );
        })}
        
      </div>
      <div className="divbottom">
      <p>Total: {total} $</p>
      <div className="divpaym">
            <Link to='/'>
            <button className="cancel" type="button" onClick={()=>{
                dispatch(deletePay())
            }}>Cancel</button>
            </Link>
          
          <Link to='/payment/pay'>
          
          <button className="Btn" onClick={()=>dispatch(deletePay())}>
            Pay
            <svg className="svgIcon" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg>
          </button></Link>
        </div>
      </div>
      </div>
    </div>
  );
};
