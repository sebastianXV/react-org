import { useState } from "react";
import "./input.css"


const Input = (props) =>{
    const [value, setValue] = useState("")
    const placeholderModificado = `${props.placeholder}...`

    const manejar = (e) =>{
        props.updateName(e.target.value)
    }
    return <div className="input">
        <label>{props.titulo}</label>
        <input 
        type="text" 
        placeholder={placeholderModificado} 
        required={props.required} 
        value ={value.updateName} 
        onChange={manejar}
        />
    </div>
}

export default Input