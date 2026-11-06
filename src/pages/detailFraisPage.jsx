
import FicheCard from '../components/ficheCard/ficheCard'
import { useDetailFraisPage } from '../hook/useDetailFraisPage'

export default function DetailFraisPage() {
    const { isLoading, id, error, data, back } = useDetailFraisPage()
    return (
        <section>
            <h2>Ma fiche de frais : {id}</h2>
            {isLoading && <div>chargement en cours</div>}
            {error ?
                <div> Erreur réseau : {error}</div>
                : <>
                    <FicheCard fiche={data} />
                    <button onClick={back}> Retour </button>
                </>
            }
        </section >
    )
}
