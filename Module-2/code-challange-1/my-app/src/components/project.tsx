'use client'

import React from 'react'

const letters = [
  { char: 'P', style: 'top-[0%] left-[3%] rotate-[340deg]' },
  { char: 'R', style: 'top-[30%] left-[12%] rotate-[15deg]' },
  { char: 'O', style: 'top-[0%] left-[30%] rotate-[5deg]' },
  { char: 'J', style: 'top-[5%] left-[53%] rotate-[110deg]' },
  { char: 'E', style: 'top-[50%] left-[30%] rotate-[330deg]' },
  { char: 'C', style: 'top-[45%] left-[58%] rotate-[60deg]' },
  { char: 'T', style: 'top-[0%] left-[75%] rotate-[25deg]' },
  { char: 'S', style: 'top-[50%] left-[82%] rotate-[340deg]' },
]

const photos = [
  { style: 'top-[7%] left-[5%]' },
  { style: 'top-[7%] left-[22%]' },
  { style: 'top-[7%] left-[39%]' },
  { style: 'top-[45%] left-[30%]' },
  { style: 'top-[45%] left-[47%]' },
  { style: 'top-[45%] left-[64%]' },
  { style: 'top-[45%] left-[81%]' },
]

export default function Project() {
  return (
    <section className="w-full h-[100vh]  relative overflow-hidden">
      {/* Letters */}
      {letters.map((item, idx) => (
  <span
    key={idx}
    className={`absolute text-white text-[18.5vw] font-extrabold z-10 animate-float-bounce 
      ${item.style}
    `}
    style={{ animationDelay: `${idx * 0.4}s` }}
  >
    {item.char}
  </span>
))}

      {/* Photo blocks */}
      {photos.map((item, idx) => (
        <div
  key={idx}
  className={`absolute w-55 h-55 bg-white/20 backdrop-blur-md border-white/30 rounded-none flex items-center justify-center text-black font-bold z-10 hidden sm:block ${item.style}`}
>
  foto
</div>
      ))}
    </section>
  )
}