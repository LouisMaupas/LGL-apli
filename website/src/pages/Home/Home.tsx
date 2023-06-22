import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import { Link } from "react-router-dom";
import pictureAquaticElf from "../../assets/picture_aquatic_elf.png";
import pictureBehemoth from "../../assets/picture_behemoth.png";
import pictureBossOrc from "../../assets/picture_boss_orc.png";
import pictureKngiht from "../../assets/picture_knight.png";
import thumbForest from "../../assets/thumb_forest.jpg";
import thumbGear from "../../assets/thumb_gear.jpg";
import thumbElf from "../../assets/thumb_elf.jpg";
import thumbMulti from "../../assets/thumb_multi.jpg";
import backgroundTavern from "../../assets/background_tavern.jpg";
import cardBack from "../../assets/card_back.png";
import cardOrcBerserk from "../../assets/card_orc_berserk.png";
import iconValue from "../../assets/icon_value.png";
import iconCost from "../../assets/icon_cost.png";
import iconPower from "../../assets/icon_power.png";

const Home = () => {
  const factionCarouselImages = [
    {
      label: "Orcs",
      imgPath: pictureBossOrc,
    },
    {
      label: "Humains",
      imgPath: pictureKngiht,
    },
    {
      label: "Démons",
      imgPath: pictureBehemoth,
    },
    {
      label: "Elfes",
      imgPath: pictureAquaticElf,
    },
  ];

  const [isCardFlipped, setCardFlipped] = useState(false);

  const handleCardClick = () => {
    setCardFlipped(!isCardFlipped);
  };

  return (
    <div className="home">
      <div
        className="presentation"
        style={
          {
            "--background-img": `url(${backgroundTavern})`,
          } as React.CSSProperties
        }
      >
        <h2>
          Dans Duel of Reigns la prise en main est un jeu d'enfant, mais la
          maîtrise est l'œuvre des maîtres !
        </h2>
        <p>
          Plongez dans l'univers de "LGL", un jeu de cartes stratégique établi
          au cœur d'un monde héroïque-fantaisie. Tissez des alliances
          stratégiques entre factions, consolidant ainsi votre pouvoir, afin
          d'imposer votre règne indéfectible !
        </p>
        <p>
          <Button>
            <Link to="/download">Je veux jouer !</Link>
          </Button>
        </p>
      </div>

      <div className="news">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 230 }}
            image={thumbForest}
            title="green forest"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Présentation du mode un joueur
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Parce qu'on a pas encore dev le multi, viens tester le mode 1
              joueur !
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Voir plus</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 230 }} image={thumbElf} title="elf" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Présentation de la nouvelle faction : les elfes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Serez-vous capable de rallier à votre cause cette faction
              millénaire ? Découvrez les elfes et leurs pouvoirs ancestraux !
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Voir plus</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 230 }} image={thumbGear} title="elf" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Notes de mise à jour 0.0.1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ok donc on n'a pas grand-chose à dire pour l'instant mais la suite
              arrive, vous êtes pas prêt !
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Voir plus</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 230 }} image={thumbMulti} title="elf" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Scène eSport & tournois
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vous n'arrivez pas à dépasser le rang gold sur LOL ? Devenez
              joueur pro de Duel of Reigns !
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Voir plus</Button>
          </CardActions>
        </Card>
      </div>

      <div className="factions">
        <h3>
          <span id="faction">Factions</span>
        </h3>
        <p>
          Il existe plusieurs factions au sein de Duel Reigns. Chacune d'entre
          elles apporte sa propre perspective, ses motivations et son rôle
          unique. Ces factions peuvent former des alliances ou se lancer dans
          des affrontements épiques. Voici un aperçu des principales factions
          que vous pouvez rencontrer.
        </p>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          {factionCarouselImages.map((item, idx) => (
            <div key={idx}>
              <img src={item.imgPath} alt={item.label} />
              <Paper
                variant="outlined"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <Typography variant="h6" color="white">
                  {item.label}
                </Typography>
              </Paper>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="cards">
        <h3>Cartes</h3>
        <Link to={"/cards"}>Voir toutes les cartes</Link>
        <p>
          Les cartes sont représentées par des illustrations uniques et
          accompagnées de diverses informations telles que sa puissance, sa
          faction, parfois un effet. Ces informations définissent la valeur
          tactique de chaque carte et sont à prendre en compte lors de la
          construction de son deck.
        </p>
        <div className="cards__card">
          <img
            onClick={handleCardClick}
            width={200}
            src={isCardFlipped ? cardBack : cardOrcBerserk}
            alt="carte"
          />
          <div className="card__description">
            <ul>
              <li>
                <span id="power">
                  {" "}
                  <a href="#power">
                    puissance
                    <img height={30} src={iconPower}></img>
                  </a>
                </span>{" "}
                normale / une puissance boostée quand sa faction règne.
              </li>
              <li>
                Une{" "}
                <a href="#value">
                  valeur
                  <img height={30} src={iconValue}></img>
                </a>{" "}
                normale / une valeur boostée quand sa faction règne.
              </li>
              <li>Facultativement un effet.</li>
              <li>
                Un{" "}
                <a href="#po">
                  coût
                  <img height={30} src={iconCost}></img>
                </a>{" "}
                en pièce d'or (PO), pour pouvoir ajouter la carte au deck.
              </li>
            </ul>
          </div>
        </div>
        <div className="card_deck">
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
      </div>
    </div>
  );
};

export default Home;
