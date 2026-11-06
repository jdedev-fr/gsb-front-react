import React from 'react'
import { Link } from 'react-router-dom'

export default function AccueilPage() {
    return (
        <section>
            <h2>Bienvenue sur l'application de gestion de frais GSB</h2>

            <p>Pour aller sur vos frais <Link to="/listes-frais">cliquez ici !</Link></p>
        </section>

    )
}
