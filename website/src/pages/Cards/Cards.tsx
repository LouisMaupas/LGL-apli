import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("cards.title")}</h1>
      <p>{t("cards.text")}</p>
    </>
  );
};

export default Cards;
