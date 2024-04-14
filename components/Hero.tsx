"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

function Hero() {
    return (
        <div className="hero">
            <div className='pt-36 flex-1padding-x'>
                <h1 className="hero__title">
                    find ,book or rent a car
                </h1>
                <p className="hero__subtitle">
                    this is hero subtitme  this is hero subtitme  this is hero subtitme

                </p>
                <CustomButton title="explore Cars"
                    handleClick={() => { }}
                    containerStyle="bg-primary-blue text-white rounded-full mt-10" />
                <div className='hero__image-container'>
                    <div className='hero__image'>
                        <Image src="/hero.png" alt="heroimage" fill className='object-contain'/>
                        <div className='hero__image-overlay'/>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero