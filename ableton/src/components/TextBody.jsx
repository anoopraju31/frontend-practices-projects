import React from 'react'
import { motion} from 'framer-motion'
import { textPop } from '../utills/animations'

const HighlightedText = ({ text, additionalWords }) => {
    const pattern = new RegExp(`\\b(${additionalWords.join('|')})\\b`, 'gi')
    const highlightedText = text.replace(pattern, "<span class='text-blue-600'>$1</span>")

    return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
}

const TextBody = ({title, highlightedTitleText, description}) => {
    return (
        <motion.div variants={textPop} initial='start' whileInView='stop' transition={{duration: 1}} className='m-[8.33%] flex justify-center items-center'>
            <div className='w-full md:w-9/12 xl:w-2/3'>
                <h3 className='text-lg lg:text-3xl font-medium mb-4 lg:mb-7'> 
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
                        description.map((des, idx) => <motion.p variants={textPop} initial='start' whileInView='stop'  transition={{ delay: 0.1 * idx, duration: 1}} key={idx} className='text-base lg:text-lg font-normal mb-2'> {des} </motion.p>)
                    }
                    </>
                }
            </div>
        </motion.div>
    )
}

export default TextBody