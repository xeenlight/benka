import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Ui/Container";
import Button from "../../components/Ui/Button";
import Reveal from "../../components/Ui/Reveal/Reveal";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.form.sent"));
    setForm({ name: "", phone: "", email: "", message: "" });
  };

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

              <div className="pcard__meta" style={{ marginTop: 14 }}>
                <div>
                  <b>{t("contact.info.phoneLabel")}:</b>{" "}
                  <a href="tel:+998998892586">(+99899) 889 25 86</a>
                </div>
                <div style={{ marginTop: 8 }}>
                  <b>{t("contact.info.emailLabel")}:</b>{" "}
                  <a href="mailto:info@zikkurat.uz">info@zikkurat.uz</a>
                </div>
                <div style={{ marginTop: 8 }}>
                  <b>{t("contact.info.addrLabel")}:</b> {t("contact.info.addr")}
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal variant="up" delay={80}>
            <form className="pcard" onSubmit={onSubmit}>
              <div className="pcard__title">{t("contact.form.title")}</div>
              <div className="pcard__desc">{t("contact.form.desc")}</div>

              <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
                <Reveal variant="up" delay={0}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={t("contact.form.name")}
                    style={inputStyle}
                  />
                </Reveal>

                <Reveal variant="up" delay={70}>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder={t("contact.form.phone")}
                    style={inputStyle}
                  />
                </Reveal>

                <Reveal variant="up" delay={140}>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder={t("contact.form.email")}
                    style={inputStyle}
                  />
                </Reveal>

                <Reveal variant="up" delay={210}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder={t("contact.form.message")}
                    rows={5}
                    style={inputStyle}
                  />
                </Reveal>

                <Reveal variant="up" delay={280}>
                  <Button variant="primary" type="submit">
                    {t("contact.form.submit")}
                  </Button>
                </Reveal>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.04)",
  color: "var(--text)",
  outline: "none",
};
