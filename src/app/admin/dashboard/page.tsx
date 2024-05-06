'use client'

import { useEffect, useState } from "react"
import ProductRow from "@/components/Admin-panel/ProductRow"
import { setLoading } from "@/components/Redux/features/loadingSlice"
import { useAppDispatch } from "@/components/Redux/hooks"
import axios from "axios"

export interface Iproduct {
    _id: string,
    imgSrc: string,
    fileKey: string,
    name: string,
    price: string,
    categotry: string,
}

const dashboard = () => {
    const [products, setproducts] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [updatetable, setupdatetable] = useState(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setLoading(true))

        axios
            .get("/api/get_products").
            then((res) => setproducts(res.data)).
            catch((err) => console.log(err)).
            finally(() => dispatch(setLoading(false)))

    }, []);

    return (
        <div>
            <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4">
                <h2 className="text-3xl">All Products</h2>

                <div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-gray-500 border-t border-[#ececec]">
                                <th>SR NO.</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Pictures</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product: Iproduct, index) => (
                                    <ProductRow
                                        key={product._id}
                                        srNo={index + 1}
                                        setOpenPopup={setOpenPopup}
                                        setUpdatetable={setupdatetable}
                                        product={product}
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* {openPopup && (
                <Popup setOpenPopup={setOpenPopup} setupdatetable={setupdatetable} />
            )} */}
        </div>
    )
}

export default dashboard