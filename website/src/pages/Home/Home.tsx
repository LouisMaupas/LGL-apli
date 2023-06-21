import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Accueil</h1>
      <div>
        <h1>Règles</h1>
        <h2>Général</h2>
        <p>Termes :</p>
        <ul>
          <li>Partie = l'ensemble des 2 manches.</li>
          <li>Manche = 12 duels.</li>
          <li>Duel : voir déroulement d'un duel.</li>
          <li>
            Puissance = la valeur qui détermine quelle carte gagne le duel.
          </li>
          <li>
            Valeur = nombre de points qui seront ajoutés au score du gagnant du
            duel.
          </li>
          <li>
            Coût : le nombre de pièces d'or à dépenser pour inclure la carte à
            son deck.
          </li>
          <li>
            Pièce d'or (Po) : monnaie permettant d'acheter des cartes pour les
            inclure dans son deck. Chaque joueur possède 240 Po.
          </li>
          <li>Effet : voir le google forms excel.</li>
        </ul>

        <h2>Factions</h2>
        <p>Il existe plusieurs factions :</p>
        <ul>
          <li>Humains</li>
          <li>Elfes</li>
          <li>Orcs</li>
          <li>Démons</li>
          <li>Nains</li>
          <li>Trolls</li>
        </ul>

        <h2>Carte</h2>
        <Link to={"/cards"}>Voir toutes les cartes</Link>
        <p>Les informations concernant les cartes :</p>
        <ul>
          <li>
            Une puissance normale / une puissance boostée quand son espèce
            règne.
          </li>
          <li>Une valeur normale / une valeur boostée quand son règne.</li>
          <li>Facultativement un effet.</li>
          <li>Un coût en pièce d'or.</li>
        </ul>

        <h2>Deck</h2>
        <p>Un deck :</p>
        <ul>
          <li>
            Est constitué de 6 cartes de 4 factions différentes (24 cartes au
            total).
          </li>
          <li>Doit coûter au total moins de 240 po.</li>
          <li>
            Il est possible d'avoir des cartes en 2 exemplaires (selon la
            rareté).
          </li>
        </ul>

        {/* ... */}
      </div>
    </>
  );
}

export default Home;
