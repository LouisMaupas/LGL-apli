import { useTranslation } from "react-i18next";
import { useAuth } from "../../AuthProvider";

const Profil = () => {
  const auth = useAuth();
  const { t } = useTranslation();
  return (
    <>
      <p>
        {t("profil.title")}
        {auth?.user?.displayName}
      </p>
      <p>{t("profil.text")}</p>
    </>
  );
};

export default Profil;
