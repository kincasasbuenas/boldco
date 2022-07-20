import React from 'react'

const Logo = ({image, width, height, alt}) => {
  return (
    <span className='logo'>
        <img 
            src={image} 
            width={width} 
            height={height} 
            alt={alt}></img>
    </span>
  )
}

export default Logo