import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Ui/Container";
import Reveal from "../../components/Ui/Reveal/Reveal";
import "./Contact.scss";

export default function Contact() {
  const { t } = useTranslation();

  // ✅ Вариант 2: Яндекс (тоже embed, но тебе нужно будет вставить свой конструкторный URL)
  // Получается так: Yandex Maps → Поделиться → Встроить карту → копируешь src из iframe
const yandexSrc =
  "https://yandex.ru/map-widget/v1/?ll=69.245303%2C41.312328&z=16&pt=69.245303,41.312328,pm2rdm";

const useYandex = true;



  return (
    <section className="page">
      <Container>
        <div className="page__head">
          <Reveal variant="up" delay={0}>
            <div className="page__kicker">{t("contact.kicker")}</div>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <h1 className="page__title">{t("contact.title")}</h1>
          </Reveal>

          <Reveal variant="up" delay={140}>
            <p className="page__lead">{t("contact.lead")}</p>
          </Reveal>
        </div>

        <div className="page__grid page__grid--2">
          {/* LEFT CARD */}
          <Reveal variant="up" delay={0}>
            <div className="pcard">
              <div className="pcard__title">{t("contact.info.title")}</div>
              <div className="pcard__desc">{t("contact.info.desc")}</div>

              <div className="pcard__meta contactMeta">
                <div>
                  <b>{t("contact.info.phoneLabel")}:</b>{" "}
                  <a href="tel:+998998892586">(+99899) 889 25 86</a>
                </div>

                <div className="contactMeta__row">
                  <b>{t("contact.info.emailLabel")}:</b>{" "}
                  <a href="mailto:info@zikkurat.uz">info@zikkurat.uz</a>
                </div>

                <div className="contactMeta__row">
                  <b>{t("contact.info.addrLabel")}:</b> {t("contact.info.addr")}
                </div>
              </div>
            </div>
          </Reveal>

          {/* MAP */}
          <Reveal variant="up" delay={80}>
            <div className="pcard">
              <div className="pcard__title">{t("contact.map.title")}</div>
              <div className="pcard__desc">{t("contact.map.desc")}</div>

              <div className="mapBox">
                <iframe
                  title="Office map"
                  className="mapBox__frame"
                  src={useYandex ? yandexSrc : googleSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="mapActions">
<a
  className="pill"
  href="https://yandex.uz/maps/?ll=69.245303%2C41.312328&z=16&pt=69.245303,41.312328,pm2rdm"
  target="_blank"
  rel="noreferrer"
>
  {t("contact.map.open")}
</a>

              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
