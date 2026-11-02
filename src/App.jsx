import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import VisitorCard from './components/visitorCard/visitorCard'

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Hello World !</h1>
        <VisitorCard visiteur={{
          matricule: "A131",
          nom: "demettre",
          prenom: "julien",
          dateEmbauche: new Date(),
          region: "bretagne"
        }} />
        <VisitorCard visiteur={{
          matricule: "A132",
          nom: "charbonnier",
          prenom: "luka",
          dateEmbauche: new Date(),
          region: "normandie"
        }} />
        <VisitorCard visiteur={{
          matricule: "A133",
          nom: "champeval",
          prenom: "téo",
          dateEmbauche: new Date(),
          region: "ile de france"
        }} />
      </main>
      <Footer />
    </>
  )
}

export default App
