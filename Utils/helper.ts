import toast from 'react-hot-toast'

export const makeToast = (text: string) => {
    toast.success(text, {
        style: {
            borderRadius: "4px",
            background: "#3333",
            color: "#fff"
        }
    })
}