/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import 'lightbox.js-react/dist/index.css'

import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'

function KuwaitPage() {
    return (
      
        <div className='p-4 place-content-center'>


    <h1 className='text-black text-xl p-4'>Kuwait City</h1>

    <p className='text-black text-lg p-4'>I spent only one day there and walked 20 kilometers through the streets.</p>

<SlideshowLightbox className='container grid grid-cols-2 gap-4 mx-auto '>
  <img className='w-full rounded' src='/k4.jpg' />
  <img className='w-full rounded' src='/k1.jpg' />  
  <img className='w-full rounded' src='/k2.jpg' />
  <img className='w-full rounded' src='/k3.jpg' />
  <img className='w-full rounded' src='/k5.jpg' />
  <img className='w-full rounded' src='/k6.jpg' />

  <img className='w-full rounded' src='/k7.jpg' />
  <img className='w-full rounded' src='/k8.jpg' />

  <img className='w-full rounded' src='/k9.jpg' />
  <img className='w-full rounded' src='/k10.jpg' />  
  <img className='w-full rounded' src='/k11.jpg' />
  <img className='w-full rounded' src='/k12.jpg' />
  <img className='w-full rounded' src='/k13.jpg' />
  <img className='w-full rounded' src='/k14.jpg' />

 
</SlideshowLightbox> 




      </div>
    )
  }
  export default KuwaitPage