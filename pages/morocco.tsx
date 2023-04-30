/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import 'lightbox.js-react/dist/index.css'

import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'

function MoroccoPage() {
    return (
      
        <div className='p-4 place-content-center'>


<h1 className='text-black text-xl p-4'>Morocco</h1>

<p className='text-black text-xl p-4'>During Ramadan in Morocco, practicing Muslims fast from dawn to sunset </p>

<SlideshowLightbox className='container grid grid-cols-2 gap-4 mx-auto '>
  <img className='w-full rounded' src='/mo1.jpg' />
  <img className='w-full rounded' src='/mo2.jpg' />  
  <img className='w-full rounded' src='/mo4.jpg' />
  <img className='w-full rounded' src='/mo3.jpg' />
  <img className='w-full rounded' src='/mo8.jpg' />
  

  <img className='w-full rounded' src='/mo10.jpg' />
 
 
</SlideshowLightbox> 

<h1 className='text-black text-xl p-4'>9:16 Format</h1>

<SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto '>
<img className='w-full rounded' src='/fr4.jpg' />
<img className='w-full rounded-lg' src='/merent.jpg' />
  <img className='w-full rounded-lg' src='/mo6p.jpg' />
  <img className='w-full rounded-lg' src='/mo8p.jpg' />
  <img className='w-full rounded-lg' src='/mo2p.jpg' />
  <img className='w-full rounded-lg' src='/mo14p.jpg' />
  <img className='w-full rounded-lg' src='/mo11p.jpg' />
  
  <img className='w-full rounded-lg' src='/mo3p.jpg' />

  <img className='w-full rounded-lg' src='/mo3p.jpg' />
  <img className='w-full rounded-lg' src='/mo8p.jpg' />
  <img className='w-full rounded-lg' src='/mo2p.jpg' />
  
  
  
 
</SlideshowLightbox> 


      </div>
    )
  }
  export default MoroccoPage