import React, { useState } from 'react'
import { BiPlay } from 'react-icons/bi'
import YouTube from 'react-youtube'
import juanpeBolivarImg from '../assets/img/poster-juanpe.jpg'

const JuanpeBolivar = () => {
    const [playVideo, setPlayVideo] = useState(false)

    const opts = {
        height: '475px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
    <div className='mx-[8.33%]'>
        <div className='w-full md:w-9/12 xl:w-2/3 mx-auto'>
            {
                playVideo?
                <YouTube videoId="9SbnhgjeyXA" opts={opts} /> :
                <div className="relative" onClick={() => setPlayVideo(prev => !prev)}>
                    <img src={juanpeBolivarImg} alt="poster juanpe" />
                    <div className='w-20 h-20 rounded-full bg-blue-700 flex justify-center items-center text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                        <BiPlay size={40} />
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default JuanpeBolivar