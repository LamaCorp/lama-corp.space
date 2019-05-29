import React, { Component } from "react"
import Layout from "./../../components/Layout"
export default class amazingproject extends Component {
  render() {
    return (
      <Layout>
        <h1>Amazing Project</h1>
        <p>
          Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là,
          mais la majeure partie d'entre elles a été altérée par l'addition
          d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du
          texte standard. Si vous voulez utiliser un passage du Lorem Ipsum,
          vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le
          texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à
          reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul
          vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de
          200 mots latins, en combinaison de plusieurs structures de phrases,
          pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu
          ne contient aucune répétition, ni ne contient des mots farfelus, ou
          des touches d'humour.
        </p>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">A really</h1>
            </div>
            <p className="card-content">
              Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C.
            </p>
          </div>
        </div>
        <a rel="nofollow" className="button lama" href="https://gitlab.com">
          Check on Gitlab
        </a>
      </Layout>
    )
  }
}
