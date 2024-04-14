"use client"
import React, { MouseEventHandler } from 'react'
import Image
  from 'next/image'
interface custombuttonprops {
  title:string;
  containerStyle?:string;
  btnType?: "button" | "submit"
  handleClick?:MouseEventHandler<HTMLButtonElement>

}
const  CustomButton =  ({title,containerStyle,handleClick,btnType}:custombuttonprops)  =>{
  return (
    <button
      disabled={false}
      type={btnType ||'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={() => { }}
    >
      <span className={`flex-1`}>
     Explore Cars

      </span>

    </button>
  )
}

export default CustomButton