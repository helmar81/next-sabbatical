/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import 'lightbox.js-react/dist/index.css'

import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'

function VideoPage() {
    return (
      
        <div className='p-4 place-content-center'>


    

    <p className='text-black text-3xl'>here are some videos I have uploaded on YouTube</p>

    <div className='display: grid grid-cols-2 gap-3 mx-auto p-4'>

    <div className="display: flex; justify-content: center;">  
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WCp5NzhWMng" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> 


        <div className="display: flex; justify-content: center;">  
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e_8CrdzpdHY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> 


        <div className="display: flex; justify-content: center;">  
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ratKG26VdnU?" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> 

        <div className="display: flex; justify-content: center;">  
        <iframe width="560" height="315" src="https://www.youtube.com/embed/g5Eyzdmn0iI?" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> 

        </div>

        


<h1 className='text-3xl'>4K</h1>



      </div>
    )
  }
  export default VideoPage