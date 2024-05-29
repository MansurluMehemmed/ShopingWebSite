import React, { useState } from 'react'
import './Category.css'
import { useDispatch, useSelector } from 'react-redux';
import { cate } from '../../../State/Slice/CategorySlice';
export const Category = () => {
    const category = useSelector(state=>state.category.category)
    console.log(category,'active')
    const dispatch = useDispatch()
    const handleClick = (e)=>{
        dispatch(cate(e.target.id))
    }
    
  return (
    <div className='category-container'>
        <ul onClick={handleClick} className='category'>
            <li id='All' className={category==='All'?'active':''}>ALL</li>
            <li id = 'Woman' className={category==='Woman'?'active':''}>WOMAN</li>
            <li id = 'Man' className={category==='Man'?'active':''}>MAN</li>
            <li id = 'ACCESSORIES' className={category==='ACCESSORIES'?'active':''}>ACCESSORIES'S</li>
        </ul>
    </div>
  )
}
