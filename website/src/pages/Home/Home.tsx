import { useState } from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();
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
        <h2>{t("presentation_quote")}</h2>
        <p>{t("presentation_desc")}</p>
        <p>
          <Button>
            <Link to="/download">{t("play_button")}</Link>
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
              {t("news_new_mode")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("news_new_mode_desc")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t("see_more")}</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 230 }} image={thumbElf} title="elf" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {t("news_new_faction")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("news_new_faction_desc")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t("see_more")}</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 230 }} image={thumbGear} title="elf" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {t("news_update")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("news_update_desc")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t("see_more")}</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 230 }} image={thumbMulti} title="elf" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {t("news_esport")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("news_esport_desc")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t("see_more")}</Button>
          </CardActions>
        </Card>
      </div>

      <div className="factions">
        <h3>
          <span id="faction">{t("home.factions_title")}</span>
        </h3>
        <p>{t("home.factions_description")}</p>
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
        <h3>{t("home.cards_title")}</h3>
        <Link to={"/cards"}>{t("home.cards_link")}</Link>
        <p>{t("home.cards_description")}</p>
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
                  <a href="#power">
                    {t("home.cards_power")}
                    <img height={30} src={iconPower}></img>
                  </a>
                </span>{" "}
                {t("home.cards_power_description")}
              </li>
              <li>
                {t("home.cards_value_a")}
                <a href="#value">
                  {t("home.cards_value_value")}
                  <img height={30} src={iconValue}></img>
                </a>{" "}
                {t("home.cards_value_description")}
              </li>
              <li> {t("home.cards_effect_option")}</li>
              <li>
                {t("home.cards_cost_a")}
                <a href="#po">
                  {t("home.cards_cost_cost")}
                  <img height={30} src={iconCost}></img>
                </a>{" "}
                {t("home.cards_cost_description")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
