import Image from 'next/image';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { StarIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({id,title,category,description,image,price,rating}) => {

    // const [rating] = useState( Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING )
    const  ratingFormApi = Math.floor(rating.rate)

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image}  width={200} height={200} objectFit='contain'/>
            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(ratingFormApi).fill().map(( _, i)=>(
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                )) }
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} />
            </div>

            <button className='button'>Add to Basket</button>
        </div>
    );
};

export default Product;