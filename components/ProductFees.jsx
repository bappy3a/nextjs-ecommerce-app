import React from 'react';
import Product from './Product';

const ProductFees = ({ products }) => {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-20 mx-auto'>
            {
                products.slice(0, 4).map(({ id, title, category, description, image, price, rating }) => (
                    <Product key={id} title={title} category={category} rating={rating} description={description} image={image} price={price} />
                ))
            }

            <img className='md:col-span-full' src="https://images.unsplash.com/photo-1501082183835-b7b33db89c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80" alt="" />

            <div className='md:col-span-2'>
                {products
                    .slice(4, 5)
                    .map(({ id, title, price, description, category, image, rating }) => (
                        <Product key={id} id={(id)} title={title} price={price} description={description} category={category} image={image} rating={rating} />
                    ))}
            </div>

            {products
                .slice(5, products.length)
                .map(({id, title, price, description, category, image, rating})=>(
                <Product key={id} id={(id)} title={title} price={price} description={description} category={category} image={image} rating={rating} />
            ))}
        </div>
    );
};

export default ProductFees;