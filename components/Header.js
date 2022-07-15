import Image from 'next/image';
import React from 'react';
import logo from '../public/logo.png';
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/solid';

const Header = () => {
    return (
        <header>
            {/* Top Header */}
            <div className='bg-[#121920] flex items-center p-1 flex-grow py-2'>
                <div className='flex mt-2 items-center flex-grow sm:flex-grow-0'>
                    <Image src={logo} width={150} height={40} alt="Logo Image" objectFit='contain' className='cursor-pointer' />
                </div>

                <div className='hidden sm:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500 '>
                    <input type="text" className='p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4 '/>
                    <SearchIcon className='h-14 p-4' />
                </div>

                <div className=' text-white flex items-center text-sm space-x-8 whitespace-nowrap relative mx-6'>
                    <div className=' relative link '>
                        <p className=' hover:underline ' >Sing In</p>
                        <br/>
                        <span className='absolute bottom-0 -right-7 h-5 bg-yellow-400 text-center cursor-pointer w-13  text-black font-bold rounded px-1'>
                            Log Out
                        </span>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div className="link relative flex items-center">
                            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            0
                            </span>
                            <ShoppingCartIcon className="h-10" />
                            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                        </div>
                </div>

                <div>
                    <ShoppingCartIcon className=' h-10 '/>
                </div>

            </div>


            {/* Bottom Nav */}
            <div className="flex items-center space-x-3 p-2 bg-[#23303f] text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    );
};

export default Header;