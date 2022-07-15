import React from 'react';
import Product from './Product';

const ProductFees = ({products}) => {
    return (
        <div>
            {
                products.map(({id,title,category,description,image,price,rating})=>(
                    <Product key={id} title={title}  category={category} rating={rating}  description={description}  image={image}  price={price} />
                ))
            }
            
        </div>
    );
};

export default ProductFees;