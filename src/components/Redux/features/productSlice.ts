import { Iproduct } from "@/app/admin/dashboard/page"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: Iproduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    name: "",
    price: "",
    categotry: "",
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Iproduct>) => {
            return action.payload
        }
    }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer;