/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import 'lightbox.js-react/dist/index.css'

import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'

function FrancePage() {
    return (
      
        <div className='p-4 place-content-center'>


<h1 className='text-black text-xl p-4'>France</h1>

<p className='text-black text-xl p-4'>flight from Phuket via Abu Dhabi to Strassbourg </p>

<SlideshowLightbox className='container grid grid-cols-2 gap-4 mx-auto '>
  <img className='w-full rounded' src='/fr1.jpg' />
  <img className='w-full rounded' src='/fr3.jpg' />  
 
  <img className='w-full rounded' src='/fr6.jpg' />
  <img className='w-full rounded' src='/fr7.jpg' />
  <img className='w-full rounded' src='/fr10.jpg' />
  

  <img className='w-full rounded' src='/fr9.jpg' />
 
 
</SlideshowLightbox> 

<h1 className='text-black text-xl p-4'>Travel itinerary</h1>

<SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto '>

  

  <img className='w-full rounded-lg' src='/map1.png' />
  <img className='w-full rounded-lg' src='/map2.png' />
  <img className='w-full rounded-lg' src='/map4.png' />
  <img className='w-full rounded-lg' src='/map5.png' />
  <img className='w-full rounded-lg' src='/map6.png' />
  <img className='w-full rounded-lg' src='/map7.png' />
  <img className='w-full rounded-lg' src='/map8.png' />
  <img className='w-full rounded-lg' src='/map9.png' />
  <img className='w-full rounded-lg' src='/map10.png' />
 
 
</SlideshowLightbox> 


      </div>
    )
  }
  export default FrancePage