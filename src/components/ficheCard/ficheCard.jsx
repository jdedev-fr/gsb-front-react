import { useState } from "react"


export default function FicheCard({ fiche }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <article className="card">
            <h3 onClick={() => setIsOpen(!isOpen)}>Numéro : {fiche.id} {isOpen ? "^" : "v"}</h3>
            {isOpen && <>
                <p>mois : {fiche.mois}</p>
                <p>total :{fiche.montant}</p>
                <p>statut : {fiche.etat}</p>
            </>}
        </article>
    )
}
