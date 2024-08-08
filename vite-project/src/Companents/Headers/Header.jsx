import React, { useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteAll, deleteBtn, minus } from "../../State/Slice/CardSlice";
import { addPay } from "../../State/Slice/PaySlice";
import { Link } from "react-router-dom";
import { addSearch } from "../../State/Slice/FetchSlice";
export const Header = () => {
  const [display, setDisplay] = useState(false);
  const fetch = useSelector(state=>state.fetch.list)
  const [input,setInput] = useState([])
  const [logout, setLogout] = useState(false);
  const basket = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
 


  const handleChange = ()=>{
    // console.log(input,'input')
    
    dispatch(addSearch(input))
    
  }
 
  let total = 0;
  basket.forEach(item => {
  let  hasil = item.count*item.price;
    total += hasil
    // console.log(total)
  });

  return (
    <header>
      <div className="divHeader">
        <div className="divlogo">
          
            <Link to='/'>
            <p>My</p>
            <span>Shop</span>
            </Link>
          
        </div>
        <nav>
          <ul className="ulCategory">
            <li>
              <Link to="/">
                <a href="#">Home</a>
              </Link>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">PROMOTION</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className="navbaruser">
          <div className="group">
            <Link to='/search' style={{display:'flex',alignItems:'center'}}>
            <svg onClick={handleChange} className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            </Link>
            <input onChange={(e)=>{setInput(e.target.value)}} placeholder="Search" type="search" className="input" />
          </div>
          <div className="favorites-container">
            <Link to="/Favorite">
              <i class="fa-regular fa-heart"></i>
            </Link>
          </div>
          <div onClick={() => setLogout(!logout)} className="div-user">
            <i class="fa-regular fa-user"></i>
            <div className={logout ? "logout" : "none"}>
              <div>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Logout</p>
              </div>
              <div>
                <Link to="/register">
                  <i class="fa-solid fa-user-plus"></i>
                  <p>Register</p>
                </Link>
              </div>
            </div>
          </div>
          <div onClick={() => setDisplay(!display)} className="cart">
            <span>{basket.length}</span>
            <i className="fa-solid fa-cart-plus"></i>
          </div>
        </div>
      </div>
      <div className={display ? "item-basket" : "none"}>
        <div className="divcartorder">
          {basket?.map((item) => {
           
            return (
              <div className="div-basket" key={item.id}>
                <div className="imgandtitle">
                  
                  <div className="divimgcount">
                    <img src={item.images} alt="" />
                    <span>{item.count}</span>
                  </div>
                  <div className="divtitle">
                    <p className="title">{item.title} </p>
                    <p className="price"> $ {item.price} </p>
                  </div>
                </div>
                <div className="div-incdec">
                  <button onClick={()=>{
                    dispatch(minus(item))
                  }} className="button-incdec" type="button">-</button>
                  <span className="span-count">{item.count}</span>
                  <button onClick={()=>{
                    dispatch(add({...item}))
                    console.log('clicked')
                  }} className="button-incdec" type="button">+</button>
                </div>
                <button class="bin-button" onClick={()=>dispatch(deleteBtn({...item}))} >
                  <svg
                    class="bin-top"
                    viewBox="0 0 39 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="5"
                      x2="39"
                      y2="5"
                      stroke="white"
                      stroke-width="4"
                    ></line>
                    <line
                      x1="12"
                      y1="1.5"
                      x2="26.0357"
                      y2="1.5"
                      stroke="white"
                      stroke-width="3"
                    ></line>
                  </svg>
                  <svg
                    class="bin-bottom"
                    viewBox="0 0 33 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_8_19" fill="white">
                      <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                    </mask>
                    <path
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                      fill="white"
                      mask="url(#path-1-inside-1_8_19)"
                    ></path>
                    <path
                      d="M12 6L12 29"
                      stroke="white"
                      stroke-width="4"
                    ></path>
                    <path d="M21 6V29" stroke="white" stroke-width="4"></path>
                  </svg>
                </button>
              </div>
 
            );
          })}
        </div>
        <p style={{alignSelf:'start',marginLeft:'20px',fontSize:'18px'}}>Total: {total} $</p>
        <div className="divBtn">
          <button
            className="deleteAll"
            type="button"
            onClick={() => {
              dispatch(deleteAll());          
              setDisplay(false);

            }
              }
          >
            DELETE ALL
          </button>
          
          <Link to="/payment">
          <button 
            onClick={() => {
              setDisplay(false);
              dispatch(deleteAll());
              dispatch(addPay([...basket]));
            }}
            className="Btn"
          >
            Pay
            <svg className="svgIcon" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
