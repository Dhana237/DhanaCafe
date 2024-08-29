import React from 'react'
import { isElementOfType } from 'react-dom/test-utils'
import { SlSettings } from 'react-icons/sl'
import Slider from 'react-slick'
import Dhana from '../../assets/Dhana23.jpeg';
import Keerthiga from '../../assets/Keerthiga07.jpeg';
import Brindha from '../../assets/Brindha08.jpeg';

const TestimonialData=[
  {
    id:1,
    name:'Dhana',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventors iste ratione ex alias quis magni at optio',
    img: Dhana,
  },
  {
    id:2,
    name:'Keerthiga',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventors iste ratione ex alias quis magni at optio',
    img:Keerthiga,
  },
  {
    id:3,
    name:'Brindha',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventors iste ratione ex alias quis magni at optio',
    img:Brindha,
  },
]

const Testimonial = () => {
  const Settings ={
    dots:true,
    arrows:false,
    infinite:true,
    speed:500,
    slidesToScroll:1,
    autoplay:true,
    autoplayspeed:200,
    cssEase:'linear',
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive:[
{
      breakpoint: 10000,
      settings:{
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true
      },
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:2,
        },
        },
        {
          breakpoint: 640,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          },
          },

    ],
  };
  return (
    <div className='py-14 mb-10'>
        <div className="container">
            {/*header section*/}
            <div data-aos='fade-up'
            className='text-center mb-20'>
                <h1 className='text-4xl font-bold font-cursive
                text-gray-800'>
                    Testimonials
                    </h1>
            </div>
            {/*Testimonials cards Section*/}
            <div data-aos='zoom-in'>
              <Slider {...Settings}>
                { 
                  TestimonialData.map((data,index) => {
                    return(
                      <div className='my-6 key={data.id}'>
                        <div className='flex flex-col gap-4
                        shadow-lg py-8 mx-4 rounded-xl
                        bg-primary/10 relative'>
                          {/*image section*/}
                          <div className='mb-4'>
                            <img src={data.img} alt=''
                            className='rounded-full w-20 h-20'/>
                          </div>
                            {/*content section*/}
                            <div className='flex flex-col
                            items-center gap-4'>
                              <div className='space-y-3'>
                                <p className='text-xs
                                text-gray-500'>{data.text}</p>
                                <h1 className='text-xl font-bold
                                text-black/70 font-cursive'>{data.name}</h1>
                              </div>
                            </div>
                            <p className='text-black/20 text-9xl
                            font-serif absolute top-0 right-0'>,,</p>
                        </div>
                      </div>
                    )
                  
                  })
                }
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial