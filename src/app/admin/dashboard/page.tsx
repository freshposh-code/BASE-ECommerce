'use client'

import { setLoading } from "@/components/Redux/features/loadingSlice"
import { useAppDispatch } from "@/components/Redux/hooks"
import axios from "axios"
import { useEffect, useState } from "react"

export interface Iproduct {
    _id: string,
    imgSrc: string,
    fileKey: string,
    name: string,
    price: string,
    categotry: string,
}

const dashboard = () => {
    const [product, setproduct] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [updatetable, setupdatetable] = useState(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setLoading(true))

        axios.get("/api/get/get_product").
            then((res) => setproduct(res.data)).
            catch((err) => console.log(err)).
            finally(() => dispatch(setLoading(false)))
    }, [updatetable])

    return (
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
                </table>
            </div>
        </div>
    )
}

export default dashboard