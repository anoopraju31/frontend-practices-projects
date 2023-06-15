import React from 'react'
import { FeatureCard } from './'

const FeatureSection = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <FeatureCard />
        <FeatureCard />
        
    </div>
  )
}

export default FeatureSection