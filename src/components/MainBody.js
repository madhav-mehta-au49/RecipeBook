import React from 'react'
import Costomimage from './Costomimage'

function MainBody() {
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]

  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>Glory Of Food</h1>
            <p className='info'> Food always feels like luxury when you’re hungry so Eat, drink and live free. There’s no telling what might happen tomorrow</p>
            
        </div>
        <div className='col gallery'>
            { images.map((src,index) =>(
                 <Costomimage key={index} imgSrc={src} pt={"80%"}/>
            )) }
           
            
        </div>
    </div>
  )
}

export default MainBody
