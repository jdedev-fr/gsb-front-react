import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import VisitorCard from './components/visitorCard/visitorCard'

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

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Hello World !</h1>
        {visiteurs.map((v) => {

          return <VisitorCard key={v.matricule} visiteur={v} />
        }
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
