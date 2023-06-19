import React, { useRef, useEffect, useState } from 'react'
import { BiPlay } from 'react-icons/bi'
import YouTube from 'react-youtube'
import { motion} from 'framer-motion'
import juanpeBolivarImg from '../assets/img/poster-juanpe.jpg'
import { textPop } from '../utills/animations'

const JuanpeBolivar = () => {
    const [playVideo, setPlayVideo] = useState(false)
    const divRef = useRef(null)
    const [divHeight, setDivHeight] = useState(0)

    useEffect(() => {
        const updateDivWidth = () => {
            if (divRef.current) {
                setDivHeight(divRef.current.offsetWidth * 0.5625)
            }
        }
    
        // Initial width calculation
        updateDivWidth()
    
        // Event listener to update width on resize
        window.addEventListener('resize', updateDivWidth)
    
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateDivWidth)
        }
    }, [])
    
    const opts = {
        height: divHeight,
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
    
    return (
    <motion.div 
        variants={textPop} 
        initial='start' 
        whileInView='stop'  
        transition={{duration: 1.5}}
        className='mx-[8.33%]'
    >
        <div className='w-full md:w-9/12 xl:w-2/3 mx-auto' ref={divRef}>
            {
                playVideo?
                <YouTube videoId="9SbnhgjeyXA" opts={opts} /> :
                <div className="relative" onClick={() => setPlayVideo(prev => !prev)}>
                    <img src={juanpeBolivarImg} alt="poster juanpe" />
                    <div className='w-14 lg:w-20 h-14 lg:h-20 rounded-full bg-blue-700 text-3xl lg:text-4xl flex justify-center items-center text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                        <BiPlay />
                    </div>
                </div>
            }

            <motion.div 
                variants={textPop} 
                initial='start' 
                whileInView='stop'  
                transition={{ duration: 1 }}
                className='mt-2 text-sm font-medium'
            >
                <p> Why Ableton - Juanpe Bolivar </p>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default JuanpeBolivar