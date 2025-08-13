'use client'

import React, { useState } from 'react'
import { useProjectPhotos } from '@/helpers/usePhotos/useProjectPhotos'
import { useProjectPhotos2 } from '@/helpers/usePhotos/useProjectPhotos2'
import { useProjectPhotos3 } from '@/helpers/usePhotos/useProjectPhotos3'
import { useProjectPhotos4 } from '@/helpers/usePhotos/useProjectPhotos4'

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

type Category = 'design3d' | 'marcomms' | 'creative' | 'passionproject'

export default function Project() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category>('design3d')

  const { photos, loading } = useProjectPhotos()
  const { photos2, loading2 } = useProjectPhotos2()
  const { photos3, loading3 } = useProjectPhotos3()
  const { photos4, loading4 } = useProjectPhotos4()

  const isModalOpen = activeIndex !== null

  const currentPhotos: any[] =
    selectedCategory === 'design3d'
      ? photos
      : selectedCategory === 'marcomms'
      ? photos2
      : selectedCategory === 'creative'
      ? photos3
      : selectedCategory === 'passionproject'
      ? photos4
      : []

  const showPrev = () => {
    if (activeIndex !== null && activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const showNext = () => {
    if (activeIndex !== null && activeIndex < currentPhotos.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  if (loading || loading2 || loading3 || loading4) return <p>Loading Photos...</p>

  return (
    <section className="w-full h-[100vh] relative overflow-hidden">
      {/* Letters */}
      {letters.map((item, idx) => (
        <span
          key={idx}
          className={`absolute text-white text-[18.5vw] font-extrabold z-10 animate-float-bounce ${item.style}`}
          style={{ animationDelay: `${idx * 0.4}s` }}
        >
          {item.char}
        </span>
      ))}

      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"></div>
      )}

      {/* CATEGORY: 3D DESIGN */}
      {photos
        .filter((_, idx) => idx === 0)
        .map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedCategory('design3d')
              setActiveIndex(idx)
            }}
            className={`absolute top-[0%] left-[3%] z-10 w-[30vw] h-[12vw] hover:scale-105 transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center cursor-pointer`}
          >
            <img
              src={item.imageUrl}
              alt={`project ${idx}`}
              className="object-cover w-full h-full rounded-xl opacity-35"
            />
            <h1 className="absolute text-white text-4xl font-bold text-center pointer-events-none">
              3D DESIGN
            </h1>
          </div>
        ))}

      {/* CATEGORY: MARCOMMS */}
      {photos2
        .filter((_, idx) => idx === 0)
        .map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedCategory('marcomms')
              setActiveIndex(idx)
            }}
            className="absolute top-[50%] left-[15%] z-20 w-[30vw] h-[12vw] hover:scale-105 transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center cursor-pointer"
          >
            <img
              src={item.imageUrl2}
              alt={`MARKETING COMMUNICATIONS ${idx}`}
              className="object-cover w-full h-full rounded-xl opacity-35"
            />
            <h1 className="absolute text-white text-4xl font-bold text-center pointer-events-none">
              MARCOMMS
            </h1>
          </div>
        ))}

      {/* CATEGORY: CREATIVE */}
      {photos3
        .filter((_, idx) => idx === 0)
        .map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedCategory('creative')
              setActiveIndex(idx)
            }}
            className="absolute top-[15%] left-[50%] z-30 w-[30vw] h-[12vw] hover:scale-105 transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center cursor-pointer"
          >
            <img
              src={item.imageUrl3}
              alt={`CREATIVE ${idx}`}
              className="object-cover w-full h-full rounded-xl opacity-35"
            />
            <h1 className="absolute text-white text-4xl font-bold text-center pointer-events-none">
              CREATIVE
            </h1>
          </div>
        ))}

      {/* CATEGORY: PASSIONPROJECT */}
      {photos4
        .filter((_, idx) => idx === 0)
        .map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedCategory('passionproject')
              setActiveIndex(idx)
            }}
            className="absolute top-[45%] left-[60%] z-40 w-[30vw] h-[12vw] hover:scale-105 transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center cursor-pointer"
          >
            <img
              src={item.imageUrl4}
              alt={`PASSION PROJECT ${idx}`}
              className="object-cover w-full h-full rounded-xl opacity-35"
            />
            <h1 className="absolute text-white text-4xl font-bold text-center pointer-events-none">
              PASSION PROJECT
            </h1>
          </div>
        ))}

      {/* Modal Viewer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>

          {activeIndex !== null && activeIndex > 0 && (
            <button
              onClick={showPrev}
              className="absolute left-4 text-white text-4xl select-none"
            >
              ‹
            </button>
          )}

          {activeIndex !== null && activeIndex < currentPhotos.length - 1 && (
            <button
              onClick={showNext}
              className="absolute right-4 text-white text-4xl select-none"
            >
              ›
            </button>
          )}

          <img
            src={
              selectedCategory === 'design3d'
                ? photos[activeIndex!].imageUrl
                : selectedCategory === 'marcomms'
                ? photos2[activeIndex!].imageUrl2
                : selectedCategory === 'creative'
                ? photos3[activeIndex!].imageUrl3
                : photos4[activeIndex!].imageUrl4
            }
            alt={`Enlarged project ${activeIndex}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-lg transition-all duration-300"
          />
        </div>
      )}
    </section>
  )
}
