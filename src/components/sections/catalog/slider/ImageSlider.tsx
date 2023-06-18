import { useState } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { RxDotFilled } from 'react-icons/rx'
import { RxDot } from 'react-icons/rx'
import Image from 'next/image'

export const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] =
    useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide
      ? images.length - 1
      : currentIndex - 1
    setCurrentIndex(newIndex)
    console.log(currentIndex)
  }

  const nextSlide = () => {
    const isLastSlide =
      currentIndex === images.length - 1
    const newIndex = isLastSlide
      ? 0
      : currentIndex + 1
    setCurrentIndex(newIndex)
    console.log(currentIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='h-400 w-400 group relative mr-6'>
      <Image
        className='rounded-md object-cover object-center'
        width={400}
        height={400}
        src={images[currentIndex]}
        alt='content'
      />
      <ChevronLeftIcon
        className='absolute left-5 top-[50%] h-8 w-8 -translate-x-0 translate-y-[-50%] text-white hover:cursor-pointer'
        onClick={prevSlide}
      />
      <ChevronRightIcon
        className='absolute right-5 top-[50%] h-8 w-8 -translate-x-0 translate-y-[-50%] text-white hover:cursor-pointer'
        onClick={nextSlide}
      />
      <div className='absolute bottom-2 flex w-full justify-center py-2'>
        {images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='cursor-pointer text-white'>
            {slideIndex === currentIndex ? (
              <RxDotFilled size={28} />
            ) : (
              <RxDot size={28} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
