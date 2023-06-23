import { useTranslation } from "react-i18next";
import { URL_DL_LAUNCHER } from "../../utils/misc/urls.js";

const Download = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("download.title")}</h1>
      <p>
        <a href={URL_DL_LAUNCHER}>{t("download.text")}</a>
      </p>
    </>
  );
};

export default Download;
