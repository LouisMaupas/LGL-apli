import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import iconValue from "../../assets/icon_value.png";
import iconCost from "../../assets/icon_cost.png";
import iconPower from "../../assets/icon_power.png";

const HowToPlay = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <p>
          {t("howToPlay.description.term1")}
          {t("howToPlay.description.term2")}
          <a href="#deck">{t("howToPlay.description.term3")}</a>
          {t("howToPlay.description.term4")}
          <a href="#faction">{t("howToPlay.description.term5")}</a>
          {t("howToPlay.description.term6")}
          <a href="#power">
            {t("howToPlay.description.term7")}
            <img height={30} src={iconPower}></img>
          </a>
          {t("howToPlay.description.term8")}
          <a href="#value">
            {t("howToPlay.description.term9")}
            <img height={30} src={iconValue}></img>
          </a>
          {t("howToPlay.description.term10")}
          <a href="#po">
            {t("howToPlay.description.term11")}
            <img height={30} src={iconCost}></img>
          </a>
          {t("howToPlay.description.term12")}
        </p>
        <h3>{t("howToPlay.rules")}</h3>
        <h4>{t("howToPlay.general")}</h4>
        <p>{t("howToPlay.Rules")}</p>
        <ul>
          <li>{t("howToPlay.game")}</li>
          <li>{t("howToPlay.round")}</li>
          <li>{t("howToPlay.duel")}</li>
          <li>{t("howToPlay.power.desc")}</li>
          <li>
            <span id="value">{t("howToPlay.value")}</span>
            {t("howToPlay.valueDesc")}
          </li>
          <li>{t("howToPlay.cost")}</li>
          <li>
            <span id="po">{t("howToPlay.goldCoin")}</span>
            {t("howToPlay.goldCoin.desc")}
          </li>
          <li>{t("howToPlay.effect")}</li>
        </ul>

        <h3>
          <span id="faction">{t("howToPlay.factions")}</span>
        </h3>
        <p>{t("howToPlay.factionsDescription")}</p>

        <h3>{t("howToPlay.cards")}</h3>
        <Link to={"/cards"}>{t("howToPlay.cards.link")}</Link>
        <p>{t("howToPlay.cards.info")}</p>
        <ul>
          <li>
            <span id="power">Une puissance</span> normale / une puissance
            boostée quand sa faction règne.
          </li>
          <li>
            Une valeur normale / une valeur boostée quand sa faction règne.
          </li>
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
