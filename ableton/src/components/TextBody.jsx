import React from 'react'

const HighlightedText = ({ text, additionalWords }) => {
    const pattern = new RegExp(`\\b(${additionalWords.join('|')})\\b`, 'gi')
    const highlightedText = text.replace(pattern, "<span class='text-blue-600'>$1</span>")

    return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
}

const TextBody = ({title, highlightedTitleText}) => {
    return (
        <div className='mx-[8.33%] py-20 flex justify-center items-center'>
            <div className='w-full md:w-9/12 lg:w-2/3'>
                <h3 className='text-lg font-medium mb-4'> 
                    {
                        highlightedTitleText?
                        <HighlightedText text={title} additionalWords={highlightedTitleText} /> :
                        title
                    } 
                </h3>
                <p className='text-sm font-normal lg:font-medium'> Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world. </p>
            </div>
        </div>
    )
}

export default TextBody