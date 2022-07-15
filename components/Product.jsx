import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';

const Product = ({id,title,category,description,image,price}) => {
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image}  width={200} objectFit='contain'/>
        </div>
    );
};

export default Product;