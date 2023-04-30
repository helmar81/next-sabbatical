/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import { useRouter } from "next/router"

import Image from 'next/image'




function VietnamPage() {
    return (
      
       


        <div className='ps-5 place-content-center'>


    <h1 className='text-black text-xl p-4'>Vietnam</h1>

    <p className='text-black text-xl p-4'>I have had the pleasure of visiting this great country six times</p>


    <SlideshowLightbox className='container grid grid-cols-3 gap-4 mx-auto '>
  <img className='w-full rounded-lg' src='/v1.jpg' />
    
  <img className='w-full rounded' src='/v2.jpg' />
  <img className='w-full rounded' src='/v3.jpg' />
  <img className='w-full rounded' src='/v4.jpg' />
  <img className='w-full rounded' src='/v14.jpg' />

  <img className='w-full rounded' src='/v5.jpg' />
  <img className='w-full rounded' src='/v6.jpg' />  
  <img className='w-full rounded' src='/v8.jpg' />
  <img className='w-full rounded' src='/v10.jpg' />

  <img className='w-full rounded' src='/v40.jpg' />
  <img className='w-full rounded' src='/v41.jpg' />  
  <img className='w-full rounded' src='/v43.jpg' />
  <img className='w-full rounded' src='/v56.jpg' />

  <img className='w-full rounded' src='/v47banhxeo.jpg' />
  <img className='w-full rounded' src='/v32.jpg' />  
  <img className='w-full rounded' src='/v19.jpg' />
  <img className='w-full rounded' src='/v24.jpg' />
  
  <img className='w-full rounded' src='meGIF.gif' />
 
 
</SlideshowLightbox> 

<h1 className='text-black text-xl p-4' >9:16 Format</h1>

<SlideshowLightbox className='container grid grid-cols-3 gap-4 mx-auto '>
<img className='w-full rounded' src='/v88me.jpg' />
  <img className='w-full rounded-lg' src='/run.jpg' />
  <img className='w-full rounded' src='/v22p.jpg' /> 
  <img className='w-full rounded' src='/anh.jpg' /> 
  <img className='w-full rounded' src='/v18p.jpg' />
  <img className='w-full rounded' src='/v38p.jpg' />

  <img className='w-full rounded' src='/v23p.jpg' />
  <img className='w-full rounded' src='/v19p.jpg' /> 
  <img className='w-full rounded' src='/v41dogp.jpg' /> 
  <img className='w-full rounded' src='/v55p.jpg' />
  <img className='w-full rounded' src='/vt.jpg' />

  <img className='w-full rounded' src='/v51p.jpg' />
  <img className='w-full rounded' src='/v17p.jpg' /> 
  <img className='w-full rounded' src='/v53p.jpg' />

  <img className='w-full rounded' src='/v49prescue.jpg' />

  <img className='w-full rounded' src='/v54me.jpg' />
  <img className='w-full rounded' src='/v35womansday.jpg' /> 
  <img className='w-full rounded' src='/v59p.jpg' />

  <img className='w-full rounded' src='/v26p.jpg' />
  <img className='w-full rounded' src='/v67pmee.jpg' /> 
  <img className='w-full rounded' src='/v60p.jpg' />

  <img className='w-full rounded' src='/v29p.jpg' />
  <img className='w-full rounded' src='/v30p.jpg' /> 
  <img className='w-full rounded' src='/v25p.jpg' />
  
  
  
 
  
 
 
 
</SlideshowLightbox> 





      </div>
    )
  }
  export default VietnamPage