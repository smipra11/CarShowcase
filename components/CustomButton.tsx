"use client"
import React, { MouseEventHandler } from 'react'
import Image
  from 'next/image'
import { CustomButtonProps } from '@/types'


const  CustomButton =  ({title,containerStyle,handleClick,btnType,textStyles,rightIcon}:CustomButtonProps)  =>{
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