import { useState } from "react"


export default function FicheCard({ fiche }) {

    return (
        <article className="card">
            <h3 >Numéro : {fiche.id} </h3>

            <p>mois : {fiche.mois}</p>
            <p>total :{fiche.montantValide}</p>
            <p>statut : {fiche.etat || "VA"}</p>

        </article>
    )
}
