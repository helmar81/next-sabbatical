/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import 'lightbox.js-react/dist/index.css'

import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'

function ThailandPage() {
    return (
      
        <div className='p-4 place-content-center'>


    <h1 className='text-black text-lg p-4 '>Thailand</h1>

    <p className='text-black text-xl p-4'>after almmost three decades my third visit</p>

<SlideshowLightbox className='container grid grid-cols-3 gap-4 mx-auto '>
 
<img className='w-full rounded' src='/t3.jpg' />
<img className='w-full rounded' src='/t5.jpg' />
<img className='w-full rounded' src='/t1.jpg' />
<img className='w-full rounded' src='/t2.jpg' />
<img className='w-full rounded' src='/t8.jpg' />
<img className='w-full rounded' src='/t2sunset.jpg' />
<img className='w-full rounded' src='/t4.jpg' />
<img className='w-full rounded' src='/t26piano.jpg' />
<img className='w-full rounded' src='/t32.jpg' />
 
  <img className='w-full rounded-lg' src='/oldtown.jpg' />
  <img className='w-full rounded' src='/phuket.jpg' />  
  <img className='w-full rounded' src='/temple.jpg' />
  <img className='w-full rounded' src='/beach.jpg' />
  <img className='w-full rounded' src='/meal.jpg' />
  <img className='w-full rounded' src='/menu.jpg' />

  <img className='w-full rounded' src='/green2.jpg' />
  <img className='w-full rounded' src='/t20.jpg' />
  <img className='w-full rounded' src='/t15.jpg' />
 
  <img className='w-full rounded' src='/t12.jpg' />
  <img className='w-full rounded' src='/t24.jpg' />
  <img className='w-full rounded' src='/t22.jpg' />
  <img className='w-full rounded' src='/t14.jpg' />
  <img className='w-full rounded' src='/t27.jpg' />
  <img className='w-full rounded' src='/t21.jpg' />
  <img className='w-full rounded' src='/tsneakers.jpg' />
  
  <img className='w-full rounded' src='/t37.jpg' />
  <img className='w-full rounded' src='/t38.jpg' />
  
  <img className='w-full rounded' src='/t11.jpg' />
  <img className='w-full rounded' src='/t18.jpg' />
  <img className='w-full rounded' src='/t39.jpg' />

 
 
 
</SlideshowLightbox> 

<h1 className='text-black text-xl p-4' >9:16 Format</h1>

<SlideshowLightbox className='container grid grid-cols-4 gap-2 mx-auto '>
  <img className='w-full rounded' src='/cutie.jpg' />
  <img className='w-full rounded' src='/t10pcoco.jpg'/>
  <img className='w-full rounded' src='/sunset.jpg' />  
  <img className='w-full rounded' src='/t20p.jpg' />
 
  <img className='w-full rounded' src='/t6p.jpg' />
  <img className='w-full rounded' src='/t4p.jpg' />
  <img className='w-full rounded' src='/t15p.jpg' />  
  <img className='w-full rounded' src='/t16p.jpg' />
  <img className='w-full rounded' src='/t12p.jpg' />
  <img className='w-full rounded' src='/t8p.jpg' />
  <img className='w-full rounded' src='/town.jpg' />
  <img className='w-full rounded' src='/t17p.jpg' />
  <img className='w-full rounded' src='/t27pgirl.jpg' />
  <img className='w-full rounded' src='/t19psport.jpg' />
  <img className='w-full rounded' src='/t31prolls.jpg' />
  <img className='w-full rounded' src='/t46scorpions.jpg'/>

  <img className='w-full rounded' src='/t50massage.jpg' />
  <img className='w-full rounded' src='/t51pmassage.jpg' />
  <img className='w-full rounded' src='/t57pmassage.jpg' />  
  <img className='w-full rounded' src='/t53pmassage.jpg' />
  <img className='w-full rounded' src='/t59pmassage.jpg' />
  <img className='w-full rounded' src='/t58pmassage.jpg' />
  <img className='w-full rounded' src='/t28pme.jpg' />
  <img className='w-full rounded' src='/t30pcovid.jpg' />
  <img className='w-full rounded' src='/t7p.jpg' />
 

 
 
</SlideshowLightbox> 


      </div>
    )
  }
  export default ThailandPage