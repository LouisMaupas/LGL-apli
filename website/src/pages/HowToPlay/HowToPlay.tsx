import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

import iconValue from "../../assets/icon_value.png";
import iconCost from "../../assets/icon_cost.png";
import iconPower from "../../assets/icon_power.png";

const HowToPlay = () => {
  return (
    <>
      <div>
        <p>
          Duel de règne est un jeu de cartes stratégique se déroulant en deux
          manches. Chaque manche est composée de 12 duels, où deux joueurs
          s'affrontent en posant des cartes. Le but est de remporter le plus de
          points possible pour devenir le gagnant de la partie. Chaque joueur
          constitue un <a href="#deck">deck</a> de 24 cartes, composé de 6
          cartes de 4 <a href="#faction">factions</a> différentes. Chaque carte
          a une{" "}
          <a href="#power">
            puissance
            <img height={30} src={iconPower}></img>
          </a>
          et une{" "}
          <a href="#value">
            valeur
            <img height={30} src={iconValue}></img>
          </a>
          , normale ou boostée lorsqu'elle est jouée pendant son règne. Les
          cartes appartiennent à différentes factions telles que les humains,
          les elfes, les orcs et les démons. Lors d'un duel, les joueurs posent
          une carte à tour de rôle. La carte avec la puissance la plus élevée
          remporte le pli, et les valeurs des deux cartes sont ajoutées au score
          du gagnant. Les duels se déroulent en suivant un déroulement précis,
          avec des phases d'activation, de pose, de combat et de score. Les
          joueurs disposent de
          <a href="#po">
            pièces d'or (Po)
            <img height={30} src={iconCost}></img>
          </a>
          qu'ils peuvent dépenser pour inclure des cartes dans leur deck. Chaque
          joueur commence avec 240 Po. Le coût des cartes doit être géré pour
          construire un deck équilibré et efficace. Le jeu propose également des
          éléments tels que des effets spéciaux et des cas particuliers qui
          peuvent influencer le déroulement des duels et des manches. À la fin
          des deux manches, le joueur ayant obtenu le score le plus élevé
          remporte la partie. C'est un jeu stratégique où la composition du
          deck, la gestion des ressources et la prise de décision tactique sont
          essentielles pour atteindre la victoire.
        </p>
        <h3>Règles</h3>
        <h4>Général</h4>
        <p>Termes :</p>
        <ul>
          <li>Partie = l'ensemble des 2 manches.</li>
          <li>Manche = 12 duels.</li>
          <li>Duel : voir déroulement d'un duel.</li>
          <li>
            Puissance = la valeur qui détermine quelle carte gagne le duel.
          </li>
          <li>
            <span id="value">Valeur</span> = nombre de points qui seront ajoutés
            au score du gagnant du duel.
          </li>
          <li>
            Coût : le nombre de pièces d'or à dépenser pour inclure la carte à
            son deck.
          </li>
          <li>
            <span id="po">Pièce d'or (Po)</span> : monnaie permettant d'acheter
            des cartes pour les inclure dans son deck. Chaque joueur possède 240
            Po.
          </li>
          <li>Effet : voir le google forms excel.</li>
        </ul>

        <h3>
          <span id="faction">Factions</span>
        </h3>
        <p>Il existe plusieurs factions :</p>

        <h3>Cartes</h3>
        <Link to={"/cards"}>Voir toutes les cartes</Link>
        <p>Les informations concernant les cartes :</p>
        <ul>
          <li>
            <span id="power">Une puissance</span> normale / une puissance
            boostée quand son espèce règne.
          </li>
          <li>Une valeur normale / une valeur boostée quand son règne.</li>
          <li>Facultativement un effet.</li>
          <li>Un coût en pièce d'or.</li>
        </ul>

        <h3>Deck</h3>
        <span id="deck">Un deck :</span>
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
      </div>
    </>
  );
};

export default HowToPlay;
