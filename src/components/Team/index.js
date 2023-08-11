import "./Team.css"
import Collaborator from "../Collaborator"
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { collaborators, deleteColab, updateColor, like } = props
    const styleTitle = { borderColor: colorPrimario }

    const obj ={
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    return <>
        {
            collaborators.length > 0 &&
            <section className="team" style={obj}>
                <input
                    type="color"
                    className="input-color-team"
                    value={colorPrimario}
                    onChange={(e)=>{
                        updateColor(e.target.value, id)
                    }}
                />
                <h3 style={styleTitle}>{titulo}</h3>
                <div className="collaborators">
                    {
                        collaborators.map((collaborator, index) => <Collaborator
                            datos={collaborator}
                            key={index}
                            colorPrimario={colorPrimario}
                            deleteColab={deleteColab}
                            like={like} />)
                    }
                </div>
            </section>
        }
    </>
}

export default Team