import "./visitorCard.css"

export default function VisitorCard({ visiteur }) {
    return (
        <article className="card">
            <h3>Matricule : {visiteur.matricule}</h3>
            <p>{visiteur.nom.toUpperCase()} {visiteur.prenom[0].toUpperCase() + visiteur.prenom.substring(1).toLowerCase()}</p>
            <p>Date embauche : {visiteur.dateEmbauche.toLocaleDateString()}</p>
            <p>Region : {visiteur.region[0].toUpperCase() + visiteur.region.substring(1).toLowerCase()}</p>
        </article>
    )
}
