import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/features/cartSlice';

interface propsType {
    id: string;
    img: string;
    title: string;
    price: number;
    quantity: number
}
const CartProduct: React.FC<propsType> = ({
    id, img, title, price, quantity,
}) => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="h-[80px] w-[100px] object-cover" src={img} alt={title} />

                <div className="space-y-2">
                    <h3 className="font-medium">{title}</h3>
                    <p className='text-gray-600 text-[14px]'>
                        {quantity} * ${price}
                    </p>
                </div>
            </div>

            <RxCross1
                className='cursor-pointer'
                onClick={() => dispatch(removeFromCart(id))}
            />
        </div>
    )
}

export default CartProduct