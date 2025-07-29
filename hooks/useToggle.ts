import { useState } from "react";


const useToggle=(Initialstate:boolean=false)=>{

    const [value,setValue]=useState(Initialstate)

    const toggle=()=>{
        setValue(!value)
    }

    return [value,toggle]

};

export default useToggle