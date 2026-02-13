import React from 'react'
import Hero_image from "../assets/hero_image.png"

const Hero = () => {
  return (
    // main div / parent div
    <div className="flex flex-wrap items-center justify-center py-12">

        {/* child 1*/}
        <div className="max-w-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Sit and shop, we got you!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="bg-primary text-white px-8 py-2 rounded-full mt-8">Shop Now</button>
        </div>

        {/* child 2*/}
        <div>
            <img src={Hero_image} alt="hero_img" className="w-full max-w-md object-cover"/>
        </div>
        
    </div>
  )
}

export default Hero;