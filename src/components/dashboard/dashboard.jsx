import React, { useEffect, useState } from 'react'
import FicheCard from '../ficheCard/ficheCard'
import { Link } from 'react-router-dom'
import { useDashBoard } from '../../hook/useDashBoard'

export default function Dashboard() {
    const { isLoading, error, data } = useDashBoard()
    return (
        <section>
            <h2>Mon DashBoard</h2>
            {isLoading && <div>chargement en cours</div>}
            {error ?
                <div> Erreur réseau : {error}</div>
                : <ul>{data.map(d => {
                    const url = `/listes-frais/${d.id}`
                    return <Link to={url} key={d.id}> <li   >fiche : {d.id} du mois {d.mois}</li></Link>
                })}</ul>
            }
        </section >
    )
}
