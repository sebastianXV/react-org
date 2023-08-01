import { useState } from "react";
import "./Form.css"
import Input from "../Input";
import OptionList from "../optionList";
import Button from "../Button";

const Form = () => {

    const [name, updateName] = useState("")
    const [position, updatePosition] = useState("")
    const [photo, updatePhoto] = useState("")
    const [team, updateTeam] = useState("")

    const send = (e) => {
        e.preventDefault();
        console.log("Enviando..")
        let datosEnviar = {
            name,
            position,
            photo,
            team
        }
        console.log(datosEnviar)
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
            />

            <Button text={"Crear"} />
        </form>
    </section>
}

export default Form;