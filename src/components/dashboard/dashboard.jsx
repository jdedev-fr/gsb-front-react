import React, { useEffect, useState } from 'react'
import FicheCard from '../ficheCard/ficheCard'

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const res = await fetch("http://localhost:8080/api/fiches-frais")

                if (!res.ok) {
                    throw new Error(`Erreur HTTP ! Statut : ${res.status}`);
                }
                const d = await res.json()
                setData([...d])
                setIsLoading(false)
            }
            catch (err) {
                setError(err.message)
                setIsLoading(false)
            }
        })()
    }, [])

    return (
        <section>
            <h2>Mon DashBoard</h2>
            {isLoading && <div>chargement en cours</div>}
            {error ?
                <div> Erreur réseau : {error}</div>
                : data.map(d => <FicheCard key={d.id} fiche={d} />)
            }
        </section>
    )
}
