import React from 'react'
import './Bunner.css'
import { useDispatch } from 'react-redux'
import { cate } from '../../../State/Slice/CategorySlice'
export const Bunner = () => {
  const dispatch = useDispatch()
  const handleCategory = (e)=>{
    console.log(e.target.innerText)
    dispatch(cate(e.target.innerText))
  }
  return (
    <div className='bunner' onClick={handleCategory}>
        <div className="row woman">
            <button type='button'>Woman</button>
        </div>
        <div className="row man">
            <button type='button'>Man</button>
        </div>
        <div className="row accessor">
            <button type='button'>ACCESSORIES</button>
        </div>
    </div>
  )
}
