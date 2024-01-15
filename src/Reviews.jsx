import React from 'react';
import People from './data'
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";



const Reviews = () => {

    const [index, setindex] = useState(0);
    const {name, job, image,text} = People[index];

   
    const prevPreson = () => {
        setindex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    const nextPerson = () => {
        setindex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    const checkNumber = (Number) =>{
        if(Number > People.length -1){
            return 0
        }
        if(Number < 0){
            return People.length - 1
        }
        return Number
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * People.length);
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setindex(checkNumber(randomNumber))
    }

  return (
    <div className='bg-white w-full max-w-[500px] p-4 shadow-xl rounded-xl text-black'>
      <div className='flex justify-center relative'>
        <img src={image} className='w-32 h-32 rounded-full'/>
        <span className='bg-blue-600 p-3 rounded-full text-white absolute left-[150px]'>
            <FaQuoteLeft />
        </span>
      </div>
      <h2 className='my-2 font-bold text-2xl'>{name}</h2>
      <p className='text-xl font-semibold text-blue-500'>{job}</p>
      <p className='mt-4 mb-6'>{text}</p>
      <div className='flex  items-center justify-center space-x-5 mb-2'>
        <button onClick={prevPreson} className='bg-blue-200 border-none outline-none text-blue-500'>
        <IoIosArrowBack />
        </button>
        <button onClick={nextPerson} className='bg-blue-200 border-none outline-none text-blue-500'>
        <IoIosArrowForward />
        </button>
      </div>
      <button onClick={randomPerson} className='bg-blue-200 border-none outline-none text-blue-500'>Suprise me</button>
    </div>
  )
}

export default Reviews
