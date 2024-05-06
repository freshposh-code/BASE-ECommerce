import React, { Dispatch, SetStateAction } from 'react'

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdatetable: Dispatch<SetStateAction<boolean>>;
}
const Popup = () => {
    return (
        <div>Popup</div>
    )
}

export default Popup