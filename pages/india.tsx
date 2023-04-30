/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'

export default function IndiaPage() {
  return (
    
     
<div className=' p-4 place-content-center'>


    <h1 className='text-black text-3xl p-4'>India</h1>

    <p className='text-black text-xl p-4'>It won’t be my last visit</p>

<SlideshowLightbox className='container grid grid-cols-2 gap-2 mx-auto '>
  <img className='w-full rounded-lg' src='/mumbai.jpg' />
  <img className='w-full rounded' src='/puducherry.jpg' />  
  <img className='w-full rounded' src='/inexpensive.jpg' />
  <img className='w-full rounded' src='/bike.jpg' />
  <img className='w-full rounded' src='/worldcafe.jpg' />

  <img className='w-full rounded-lg' src='/tamil.jpg' />
  <img className='w-full rounded' src='/airport.jpg' />  
  <img className='w-full rounded' src='/cheap.jpg' />
  <img className='w-full rounded' src='/inexpensive.jpg' />
  
  <img className='w-full rounded' src='/market.jpg' />
  <img className='w-full rounded' src='/yummy.jpg' />
  <img className='w-full rounded' src='/kitchen.jpg' />

  <img className='w-full rounded' src='/worldcafe.jpg' />
  <img className='w-full rounded' src='/enfield.jpg' />
  


  <img className='w-full rounded' src='/meBangalore.jpg' />
  
 
  <img className='w-full rounded' src='/mePuducherry.jpg' />
 
 
</SlideshowLightbox> 
<div>

<div className=' p-4 place-content-center'></div>

<h1 className='text-black text-xl p-4'> People of India</h1>

<SlideshowLightbox className='container grid grid-cols-3 gap-4 mx-auto '>
  <img className='w-full rounded-lg' src='/1.jpg' />
  <img className='w-full rounded' src='/2.jpg' />  
  <img className='w-full rounded' src='/3.jpg' />
  <img className='w-full rounded' src='/4.jpg' />
  <img className='w-full rounded' src='/5.jpg' />
  <img className='w-full rounded' src='/6.jpg' />
  <img className='w-full rounded' src='/7.jpg' />
  <img className='w-full rounded' src='/8.jpg' />
  <img className='w-full rounded' src='/9.jpg' />
  <img className='w-full rounded' src='/10.jpg' />
  <img className='w-full rounded' src='/11.jpg' />
  <img className='w-full rounded' src='/12.jpg' />
  
  
 
</SlideshowLightbox> 


</div>

</div>




  





  )
}

