import SimpleImageSlider from 'react-simple-image-slider'
import './slider-style.css'

export const ImageSlider = ({ images }) => {
  return (
    <div className='mr-6 h-fit shrink-0 grow-0 rounded-md'>
      <SimpleImageSlider
        className='rounded-md'
        width={400}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        navSize={32}
        navMargin={4}
      />
    </div>
  )
}
