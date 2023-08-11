import { useState } from "react";
import "./input.css"


const Input = (props) => {
    const [value, setValue] = useState("")
    const placeholderModificado = `${props.placeholder}...`

    //Destucturacion
    const { type = "text" } = props

    const manejar = (e) => {
        props.updateName(e.target.value)
    }
    return <div className={`input input-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={value.updateName}
            onChange={manejar}
            type={type}
        />
    </div>
}

export default Input