import { useState } from "react"
import "./MyOrg.css"

const MyOrg = (props) =>{

    //const [nombreVariable,funcionActualza] = useState(valorInicial)

//    const [show, upadateShow] = useState(true);

//     const create = () => {
//         console.log("Mostrar/OCultar", show)
//         upadateShow(!show)
//     }

    return <section className="orgSection">
        <h3 className="tittle">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.toggleShow} />
    </section>
} 


export default MyOrg