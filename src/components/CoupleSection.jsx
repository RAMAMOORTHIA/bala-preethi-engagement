import "./CoupleSection.css";
import Backround from "../assets/blue-border.png";
import Male from "../assets/Anjusree/Groom.jpeg";
import Female from "../assets/Anjusree/Bride.jpeg";

import { useTranslation } from "react-i18next";

const CoupleSection = () => {
  const { t } = useTranslation();

  return (
    <section className="couple">
      <h2>{t("couple_title")}</h2>

      <span
        dangerouslySetInnerHTML={{
          __html: t("couple_sub"),
        }}
      />

      <div className="couple-card">
        {/* Groom */}

        <div className="groom-info">
          <div className="profile-container">
            <img loading="lazy" src={Male} alt="Groom" />
            <img className="lotus" src={Backround} alt="" />
          </div>

          <span>{t("chi_kum")}</span>

          <h3>{t("male")}</h3>

          <p>{t("groom_education")}</p>

          <p>
            {t("groom_designation")}
            <br />
            {t("groom_company")}
          </p>

          <span>{t("sone_of")}</span>

          <p>{t("grrom_parents")}</p>

          <p>{t("grooms_village")}</p>
        </div>

        {/* Bride */}

        <div className="groom-info">
          <div className="profile-container">
            <img loading="lazy" src={Female} alt="Bride" />
            <img loading="lazy" className="lotus" src={Backround} alt="" />
          </div>

          <span>{t("chi_sow")}</span>

          <h3>{t("female")}</h3>

          <p>{t("bride_education")}</p>

          <p>
            {t("bride_designation")}
            <br />
            {t("bride_company")}
          </p>

          <span>{t("dau_od")}</span>

          <p>{t("bride_parents")}</p>

          <p>{t("bride_village")}</p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection; 