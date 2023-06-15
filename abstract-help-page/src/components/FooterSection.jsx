import React from 'react'

const FooterSection = ({title, items, contact}) => {
  return (
    <section className='text-white'>
        <h2 className='py-2 text-xl font-bold'> {title} </h2>

        <div>
            {
                items.map(item => <p key={item}> item </p>)
            }
        </div>

        {
            contact &&
            <div className='mt-8'>
                <h4 className='font-bold'> Contract Us </h4>
                <p> info@abstract.com </p>
            </div>
        }
    </section>
  )
}

export default FooterSection