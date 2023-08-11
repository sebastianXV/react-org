import "./optionList.css"
const OptionList = (props) =>{



        const change = (e) =>{
            console.log("cambio", e.target.value)
            props.updateTeam(e.target.value)
        }
    
    return <div className="option-list">
        <label>Equipos</label>
        <select value={props.value} onChange={change}>
            <option value="" disabled defaultValue="" hidden>Selecciona el equipo</option>
            {props.teams.map((teams, index) => <option key={index} value={teams}>{teams}</option>
            )}
        </select>
    </div>
    }

export default OptionList
