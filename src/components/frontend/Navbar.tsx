import React, { Dispatch, SetStateAction } from 'react'
import { useAppSelector } from '../Redux/hooks'
import { BsSearch } from "react-icons/bs"
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

interface PropsCart {
    setShowCart: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setShowCart }: PropsCart) => {

    const cartCount = useAppSelector((state) => state.cartReducer.length)

    return (
        <div className='pt-4 bg-white top-0 sticky'>
            <div className="px-4 md:px-28">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold"><span className='text-blue-700'>P</span>SHOP</div>
                    <div className="xl:flex hidden w-full max-w-[500px]">
                        <input className='border-2 border-accent px-6 py-2 w-full'
                            type="text" placeholder='search for products...' />

                        <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
                            <BsSearch />
                        </div>
                    </div>



                    <div className="flex gap-4 md:gap-8 items-center">
                        <div className="md:flex hidden gap-3">
                            <div className="rounded-full border-2 border-gray-300
                             text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                                <AiOutlineUser />
                            </div>

                            <div>
                                <p className='text-gray-500'>Hello, Sign in</p>
                                <p className='font-medium'>Your account</p>
                            </div>
                        </div>

                        <div className="text-gray-500 text-[32px] relative cursor-pointer"
                            onClick={() => setShowCart(true)}>
                            <AiOutlineShoppingCart />

                            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px]
                             h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                                {cartCount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='bg-gray-700 mt-4' />
        </div>
    )
}

export default Navbar