import { Iproduct } from '@/app/admin/dashboard/page';
import { Dispatch, SetStateAction } from 'react'
import { useAppDispatch } from '../Redux/hooks';
import { setProduct } from '../Redux/features/productSlice';
import Image from 'next/image';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface propstype {
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdatetable: Dispatch<SetStateAction<boolean>>;
    product: Iproduct;
}

const ProductRow = ({ srNo, setOpenPopup, setUpdatetable, product }: propstype) => {

    const dispatch = useAppDispatch()

    const onEdit = () => {
        dispatch(setProduct(product))
        setOpenPopup(true)
    }

    const onDelete = () => {
        //    
    }
    return (
        <tr>
            <td>
                <div>{srNo}</div>
            </td>
            <td>
                <div>
                    {product.name}</div>
            </td>
            <td>
                <div>${product.price}</div>
            </td>
            <td className='py-2'>
                <Image src={product.imgSrc} width={40} height={40} alt='product-image' />
            </td>
            <td>
                <div className="text-2xl flex items-center gap-2 text-gray-600">
                    <CiEdit
                        className='cursor-pointer hover:text-black'
                        onClick={onEdit} />

                    <RiDeleteBin5Line
                        className='cursor-pointer hover:text-red-600'
                        onClick={onEdit} />
                </div>
            </td>
        </tr>
    )
}

export default ProductRow