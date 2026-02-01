import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Ui/Container";
import Button from "../../components/Ui/Button";
import Reveal from "../../components/Ui/Reveal/Reveal";

export default function Industries() {
  const { t } = useTranslation();
  const industries = t("industries.items", { returnObjects: true }) || [];

  return (
    <section className="page">
      <Container>
        <div className="page__head">
          <Reveal variant="up" delay={0}>
            <div className="page__kicker">{t("industries.kicker")}</div>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <h1 className="page__title">{t("industries.title")}</h1>
          </Reveal>

          <Reveal variant="up" delay={140}>
            <p className="page__lead">{t("industries.lead")}</p>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div style={{ marginTop: 16 }}>
              <Button variant="primary" onClick={() => (window.location.href = "/projects")}>
                {t("industries.viewProjects")}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="page__grid page__grid--3">
          {industries.map((it, idx) => (
            <Reveal
              key={`${it.title}-${idx}`}
              variant="up"
              delay={idx * 70}
            >
              <div className="pcard">
                <div className="pcard__title">{it.title}</div>
                <div className="pcard__desc">{it.desc}</div>
                <div className="pcard__meta">{it.meta}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
