import { useState } from "react";
import "./Form.css"
import Input from "../Input";
import OptionList from "../optionList";
import Button from "../Button";

const Form = (props) => {

    const [name, updateName] = useState("")
    const [position, updatePosition] = useState("")
    const [photo, updatePhoto] = useState("")
    const [team, updateTeam] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const { registerColab, createTeam } = props

    const send = (e) => {
        e.preventDefault();
        let datosEnviar = {
            name,
            position,
            photo,
            team
        }
        registerColab(datosEnviar)
    }

    const sendTeam = (e) =>{
        e.preventDefault()
        createTeam({titulo, colorPrimario: color})
    }

    return <section className="form">
        <form onSubmit={send}>
            <h2>Rellena el formulario para crear un colaborador.</h2>
            <Input
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required value={name}
                updateName={updateName} />
            <Input
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required value={position}
                updateName={updatePosition} />
            <Input
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required value={photo}
                updateName={updatePhoto} />

            <OptionList
                value={team}
                updateTeam={updateTeam}
                teams={props.teams}
            />

            <Button text={"Crear"} />
        </form>

        <form onSubmit={sendTeam}>
            <h2>Rellena el formulario para crear un equipo.</h2>
            <Input
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required value={titulo}
                updateName={setTitulo} />
            <Input
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required value={color}
                updateName={setColor} 
                type="color"
                />
            <Button text={"Crear equipo"} />
        </form>
    </section>
}

export default Form;