import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Ui/Container";
import Button from "../../components/Ui/Button";
import Reveal from "../../components/Ui/Reveal/Reveal";
import "./Home.scss";

export default function Home() {
  const { t } = useTranslation();

  const services = t("home.services.items", { returnObjects: true }) || [];
  const reasons = t("home.why.items", { returnObjects: true }) || [];
  const steps = t("home.process.items", { returnObjects: true }) || [];
  const specs = t("home.spec.items", { returnObjects: true }) || [];

  return (
    <div className="home">
      {/* HERO */}
      <section className="home__hero">
        <Container className="home__heroInner">
          <div className="home__heroLeft">
            <Reveal variant="up" delay={0}>
              <div className="home__badge">{t("home.badge")}</div>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <h1 className="home__h1">{t("home.title")}</h1>
            </Reveal>

            <Reveal variant="up" delay={140}>
              <p className="home__lead">{t("home.lead")}</p>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <div className="home__cta">
                <Button variant="primary" onClick={() => (window.location.href = "/contact")}>
                  {t("cta.consult")}
                </Button>
                <Button variant="ghost" onClick={() => (window.location.href = "/services")}>
                  {t("nav.services")}
                </Button>
              </div>
            </Reveal>

            <div className="home__stats">
              {[
                { n: t("home.stats.a.n"), t: t("home.stats.a.t") },
                { n: t("home.stats.b.n"), t: t("home.stats.b.t") },
                { n: t("home.stats.c.n"), t: t("home.stats.c.t") },
              ].map((s, idx) => (
                <Reveal key={idx} variant="up" delay={260 + idx * 80}>
                  <div className="stat">
                    <div className="stat__n">{s.n}</div>
                    <div className="stat__t">{s.t}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="home__heroRight">
            <Reveal variant="scale" delay={120}>
              <div className="home__heroCard">
                {/* сюда потом подставишь картинку/видео как на оригинале */}
                <div className="home__heroMedia" />
                <div className="home__heroNote">
                  <div className="home__heroNoteTitle">{t("home.heroCard.title")}</div>
                  <div className="home__heroNoteText">{t("home.heroCard.text")}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section>
        <Container>
          <Reveal variant="up">
            <h2 className="home__h2">{t("home.servicesTitle")}</h2>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <p className="home__muted">{t("home.servicesLead")}</p>
          </Reveal>

          <div className="grid grid--3">
            {services.map((item, idx) => (
              <Reveal key={`${item.title}-${idx}`} variant="up" delay={idx * 70}>
                <div className="card">
                  <div className="card__title">{item.title}</div>
                  <div className="card__desc">{item.desc}</div>
                  <a className="card__link" href="/services">
                    {t("common.more")} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY US */}
      <section>
        <Container>
          <div className="twoCol">
            <div>
              <Reveal variant="up">
                <div className="kicker">{t("home.whyKicker")}</div>
              </Reveal>
              <Reveal variant="up" delay={60}>
                <h2 className="home__h2">{t("home.whyTitle")}</h2>
              </Reveal>
              <Reveal variant="up" delay={120}>
                <p className="home__muted">{t("home.whyLead")}</p>
              </Reveal>
              <Reveal variant="up" delay={180}>
                <a className="link" href="/about">
                  {t("home.learnMore")} →
                </a>
              </Reveal>
            </div>

            <div className="grid grid--1">
              {reasons.map((item, idx) => (
                <Reveal key={`${item.title}-${idx}`} variant="up" delay={idx * 80}>
                  <div className="card">
                    <div className="card__title">{item.title}</div>
                    <div className="card__desc">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section>
        <Container>
          <Reveal variant="up">
            <div className="kicker">{t("home.processKicker")}</div>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="home__h2">{t("home.processTitle")}</h2>
          </Reveal>

          <div className="steps">
            {steps.map((item, idx) => (
              <Reveal key={`${item.n}-${idx}`} variant="up" delay={idx * 80}>
                <div className="step">
                  <div className="step__n">{item.n}</div>
                  <div className="step__t">{item.title}</div>
                  <div className="step__d">{item.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={120}>
            <div style={{ marginTop: 18 }}>
              <Button variant="primary" onClick={() => (window.location.href = "/contact")}>
                {t("cta.startProject")}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SPECIALIZATION */}
      <section>
        <Container>
          <Reveal variant="up">
            <div className="kicker">{t("home.specKicker")}</div>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="home__h2">{t("home.specTitle")}</h2>
          </Reveal>

          <div className="grid grid--3">
            {specs.map((item, idx) => (
              <Reveal key={`${item.title}-${idx}`} variant="up" delay={idx * 70}>
                <div className="card card--media">
                  <div className="card__media" />
                  <div className="card__title">{item.title}</div>
                  <div className="card__desc">{item.desc}</div>
                  <a className="card__link" href="/projects">
                    {t("home.viewProjects")} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="home__finalCta">
        <Container className="home__finalInner">
          <Reveal variant="up">
            <div>
              <h2 className="home__h2">{t("home.finalTitle")}</h2>
              <p className="home__muted">{t("home.finalLead")}</p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <div className="home__finalBtns">
              <a className="pill" href="tel:+998998892586">
                (+99899) 889 25 86
              </a>
              <a className="pill" href="mailto:info@zikkurat.uz">
                info@zikkurat.uz
              </a>
              <Button variant="primary1" onClick={() => (window.location.href = "/contact")}>
                {t("cta.contactUs")}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
