import React from 'react'

const HighlightedText = ({ text, additionalWords }) => {
    const pattern = new RegExp(`\\b(${additionalWords.join('|')})\\b`, 'gi')
    const highlightedText = text.replace(pattern, "<span class='text-blue-600'>$1</span>")

    return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
}

const TextBody = ({title, highlightedTitleText, description}) => {
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
                {
                    description &&
                    <>
                    {
                        description.map((des, idx) => <p key={idx} className='text-sm font-normal lg:font-medium mb-2'> {des} </p>)
                    }
                    </>
                }
            </div>
        </div>
    )
}

export default TextBody