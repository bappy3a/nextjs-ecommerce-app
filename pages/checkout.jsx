import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFees from '../components/ProductFees';

const checkout = () => {
    return (
        <div className='bg-gray-100 '>
            <Head>
                <title>Amazonc - Checkout </title>
                <meta name="description" content="Amazone Checkout" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    
                    <div className='text-center'>
                        <Image src="https://links.papareact.com/ikj"  width={1020} height={250} objectFit='contain'
                        />
                
                    </div>

                    {/* <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? "Your Basket is Empty" : "Shopping Basket"}</h1>

                        {items.map((item, i)=>(
                            
                            <CheckoutProduct 
                                key={i} 
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                                quantity={item.quantity}
                            />
                        ))}
                    </div> */}
                    
                </div>


                       
                
            </main>
        </div>
    );
};

export default checkout;