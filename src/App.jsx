import './App.css'
import FicheCard from './components/ficheCard/ficheCard'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import VisitorCard from './components/visitorCard/visitorCard'
import Filtre from './components/filtre/filtre'
import { useState } from 'react'
import Dashboard from './components/dashboard/dashboard'

const visiteurs = [
  {
    matricule: "A131",
    nom: "demettre",
    prenom: "julien",
    dateEmbauche: new Date(),
    region: "bretagne"
  },
  {
    matricule: "A132",
    nom: "charbonnier",
    prenom: "luka",
    dateEmbauche: new Date(),
    region: "normandie"
  },
  {
    matricule: "A133",
    nom: "champeval",
    prenom: "téo",
    dateEmbauche: new Date(),
    region: "ile de france"
  }
]

const fiches = [
  {
    id: "1",
    etat: "en cours",
    montant: 20,
    mois: "072026",
  },
  {
    id: "2",
    etat: "validé",
    montant: 50.4,
    mois: "082026",
  },
  {
    id: "3",
    etat: "annulé",
    montant: 25.3,
    mois: "092026",
  }
]

function App() {
  const [filtre, setFiltre] = useState("Tout");
  const [fichesFiltre, setFichesFiltre] = useState([...fiches])

  const modif = (val) => {
    console.log(val)
    if (val === "Tout") {
      setFichesFiltre([...fiches])
    } else {

      setFichesFiltre([...fiches.filter(f => f.etat === val)])
    }
    setFiltre(val)

  }

  return (
    <>
      <Header />
      <main>
        <h2>Liste des visiteurs</h2>
        {visiteurs.map((v) => {

          return <VisitorCard key={v.matricule} visiteur={v} />
        }
        )}
        <h2>Liste des fiches</h2>
        <Filtre val={filtre} setVal={modif} />
        {fichesFiltre.map((f) => {

          return <FicheCard key={f.id} fiche={f} />
        }
        )}


        <Dashboard />
      </main>
      <Footer />
    </>
  )
}

export default App
