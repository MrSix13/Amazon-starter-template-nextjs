import React from 'react'
import Image from 'next/image';
import{
    MenuIcon,
    SearchIcon,ShoppingCartIcon
} from '@heroicons/react/outline';


function Header() {
    return (
        <header>
            {/*TOP nav */}
            <div className='flex items-center bg-amazon_blue flex-grow py-2'>
                <div className='mt-2 flex item-center flex-grow sm:flex-grow-0'>
                    <Image 
                      src="https://links.papareact.com/f90"
                      width={150}
                      height={40}
                      className=''
                      objectFit='contain'
                      className='cursor-pointer'
                    />
                </div>

                {/*Search */}
                <div className='hidden sm:flex items-center cursor-pointer flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink roundend-l-md foucs:outline-none px-4' type="text" />
                    <SearchIcon className='h-12 p-4' />

                </div>

                {/*Right */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6'>
                    <div className='link'>
                        <p>Hello Mr Six</p>
                        <p className='font-extrabold md:text-sm' >Account & List </p>
                    </div>
                    <div className='link'> 
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'> & Orders</p>
                    </div>
                    <div className=' relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black'>0</span>
                        <ShoppingCartIcon className='h-10'/>
                        <p className=' hidden md:inline font-extrabold md:text-sm mt-2' >Basket</p>
                    </div>
                </div>
            </div>


            {/*Bottom nav */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                <p className=' link flex item-center'>
                    <MenuIcon className='h-6 mr-1'/>
                    All
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
        
    )
}

export default Header
