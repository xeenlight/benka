import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Ui/Container";
import Button from "../../components/Ui/Button";
import "./About.scss";
import Reveal from "../../components/Ui/Reveal/Reveal";

export default function About() {
  const { t } = useTranslation();

  const statsRaw = t("aboutPage.stats", { returnObjects: true });
  const featuresRaw = t("aboutPage.features", { returnObjects: true });
  const stepsRaw = t("aboutPage.steps", { returnObjects: true });

  const stats = Array.isArray(statsRaw) ? statsRaw : [];
  const features = Array.isArray(featuresRaw) ? featuresRaw : [];
  const steps = Array.isArray(stepsRaw) ? stepsRaw : [];

  return (
    <section className="about">
      <Container>
        {/* HERO */}
        <Reveal variant="up">
        <div className="about__hero">
          <div className="about__heroLeft">
            <div className="about__kicker">{t("aboutPage.kicker")}</div>
            <h1 className="about__title">{t("aboutPage.title")}</h1>
            <p className="about__lead">{t("aboutPage.lead")}</p>

            <div className="about__btns">
              <Button variant="primary" onClick={() => (window.location.href = "/contact")}>
                {t("cta.consult")}
              </Button>
              <Button variant="ghost" onClick={() => (window.location.href = "/projects")}>
                {t("aboutPage.viewProjects")}
              </Button>
            </div>
          </div>

          <div className="about__heroRight">
            <div className="about__media">
              {/* сюда потом поставишь фото/видео */}
              <div className="about__mediaInner" />
              <div className="about__mediaCaption">
                <div className="about__mediaTitle">{t("aboutPage.media.title")}</div>
                <div className="about__mediaText">{t("aboutPage.media.text")}</div>
              </div>
            </div>
          </div>
        </div>
</Reveal>
        {/* STATS */}
        <Reveal variant="up" delay={80}>
        <div className="about__stats">
          {stats.map((s, idx) => (
            <div className="aboutCard" key={`${s.n}-${idx}`}>
              <div className="aboutCard__n">{s.n}</div>
              <div className="aboutCard__t">{s.t}</div>
              <div className="aboutCard__d">{s.d}</div>
            </div>
          ))}
        </div>
</Reveal>
        {/* FEATURES */}
        <Reveal variant="up" delay={160}>
        <div className="about__block">
          <div className="about__blockHead">
            <div className="about__kicker">{t("aboutPage.featuresKicker")}</div>
            <h2 className="about__h2">{t("aboutPage.featuresTitle")}</h2>
            <p className="about__muted">{t("aboutPage.featuresLead")}</p>
          </div>

          <div className="about__grid">
            {features.map((f, idx) => (
                <Reveal key={f.title} delay={idx * 60} variant="up" className="about__grid">
                  <div className="aboutCard aboutCard--soft">
                    <div className="aboutCard__title">{f.title}</div>
                    <div className="aboutCard__desc">{f.desc}</div>
                  </div>
                </Reveal>
            ))}
          </div>
        </div>
</Reveal>
        {/* HOW WE WORK */}
        <Reveal variant="up" delay={240}>
        <div className="about__block">
          <div className="about__blockHead">
            <div className="about__kicker">{t("aboutPage.stepsKicker")}</div>
            <h2 className="about__h2">{t("aboutPage.stepsTitle")}</h2>
            <p className="about__muted">{t("aboutPage.stepsLead")}</p>
          </div>

          <div className="about__steps">
            {steps.map((st, idx) => (
              <div className="stepCard" key={`${st.n}-${idx}`}>
                <div className="stepCard__n">{st.n}</div>
                <div className="stepCard__title">{st.title}</div>
                <div className="stepCard__desc">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
</Reveal>
        {/* CTA */}
        <Reveal variant="up" delay={320}>
        <div className="about__cta">
          <div>
            <h2 className="about__h2">{t("aboutPage.cta.title")}</h2>
            <p className="about__muted">{t("aboutPage.cta.lead")}</p>
          </div>

          <div className="about__ctaBtns">
            <a className="pill" href="tel:+998998892586">(+99899) 889 25 86</a>
            <a className="pill" href="mailto:info@zikkurat.uz">info@zikkurat.uz</a>
            <Button variant="primary" onClick={() => (window.location.href = "/contact")}>
              {t("cta.contactUs")}
            </Button>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
