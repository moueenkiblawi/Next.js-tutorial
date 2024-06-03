"use client";

import Hero from '@/components/Hero';
import '../../Styles/style.css'
import React from 'react'
import StarsCanvas from '@/components/StarBackground';

function page() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20 h-[850px]">
      <StarsCanvas/>
        <Hero/>
      
      </div>
    </div>
  )
}

export default page