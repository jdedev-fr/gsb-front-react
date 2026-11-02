import "./filtre.css"

export default function Filtre({ val, setVal }) {
    return (
        <div className="filtre">
            <p>filtre :</p>
            <select name="" id="" onChange={(e) => setVal(e.target.value)} value={val}>
                <option value="Tout" >tout</option>
                <option value="en cours" >en cours</option>
                <option value="validé" >validé</option>
                <option value="annulé" >annulé</option>
            </select>
        </div>
    )
}
