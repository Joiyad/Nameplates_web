import React from 'react'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import { cpp1data } from '../data/cpp1/cpp1data'

const CPP1 = () => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center py-20 md:py-40">
        {cpp1data.map(({ id, title, description, path, imageUrl}) => (
          <ServiceCard
            key={id}
            title={title}
            description={description}
            path={path}
            imageUrl={imageUrl}
          />
        ))}
      </div>
  )
}

export default CPP1