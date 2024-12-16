import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='title-text px-4 md:px-20 py-24 md:py-10'>
      <h1 className='text-3xl md:text-4xl text-center font-semibold text-black'>{title}</h1>
    </div>
  )
}

export default Heading