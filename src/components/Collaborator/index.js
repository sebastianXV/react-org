import "./Collaborator.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Collaborator = (props) =>{

    const {name, photo, position, team, id, fav} = props.datos
    const {colorPrimario, deleteColab, like} = props

    // condicion ? verdadero : falso

    return <div className="collaborator">
        <AiFillCloseCircle className="delete" onClick={() => deleteColab(id)} />
        <div className="head" style={{backgroundColor: colorPrimario}}>
            <img src={photo} alt="Foto"></img>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{position}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> : <AiOutlineHeart onClick={ ()=> like(id)}/> }
            
        </div>
    </div>
}

export default Collaborator