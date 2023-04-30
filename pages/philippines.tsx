/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import 'lightbox.js-react/dist/index.css'

import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'

function PhilippinesPage() {
    return (
      
        <div className='p-4 place-content-center'>


<h1 className='text-black text-xl p-4'>Philippines</h1>

<p className='text-black text-xl p-4'>stunning beaches, beautiful islands and cute girls </p>


<SlideshowLightbox className='container grid grid-cols-2 gap-4 mx-auto '>
  <img className='w-full rounded' src='/p5.jpg' />
  <img className='w-full rounded' src='/p11lorelyn.jpg' />
  <img className='w-full rounded' src='/p6.jpg' />  
  <img className='w-full rounded' src='/p7.jpg' />
  <img className='w-full rounded' src='/p8.jpg' />
  <img className='w-full rounded' src='/p9.jpg' />
  <img className='w-full rounded' src='/p10.jpg' />

  <img className='w-full rounded' src='/p12.jpg' />
  <img className='w-full rounded' src='/p13.jpg' />
  <img className='w-full rounded' src='/p14.jpg' />
  <img className='w-full rounded' src='/p1airport.jpg' />
  <img className='w-full rounded' src='/p3.jpg' /> 
 
</SlideshowLightbox> 

<h1 className='text-black text-xl p-4'>9:16 Format</h1>

<SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto '>
  <img className='w-full rounded-lg' src='/p10plorelyn.jpg' />
  <img className='w-full rounded' src='/p18p.jpg' />  
  <img className='w-full rounded' src='/p34pme.jpg' />
  <img className='w-full rounded' src='/p37pme.jpg' />
  <img className='w-full rounded' src='/p38pme.jpg' />

  <img className='w-full rounded' src='/p40plorelyn.jpg' />
  <img className='w-full rounded' src='/p2pbeauty.jpg' />
  <img className='w-full rounded' src='/p33p.jpg' />
  <img className='w-full rounded' src='/p15p.jpg' />
  <img className='w-full rounded' src='/p3p.jpg' />
 
 
</SlideshowLightbox> 


      </div>
    )
  }
  export default PhilippinesPage