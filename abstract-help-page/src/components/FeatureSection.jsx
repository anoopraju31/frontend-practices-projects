import React from 'react'
import { FeatureCard } from './'
import { features } from '../utills/features'

const FeatureSection = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden'>
        {
            features.map(({id, image, title, description}) => <FeatureCard key={id} id={id} image={image} title={title} description={description} />)
        }
    </div>
  )
}

export default FeatureSection