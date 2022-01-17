import { useState } from "react";


function useModal() {
    const [modal, setModal] = useState(false)
    const Toggle = () => setModal(!modal)
    return{
        modal,
        Toggle,
    }
}

export default useModal;