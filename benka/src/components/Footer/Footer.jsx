import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../Ui/Container";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__col">
          <div className="footer__brand">Benka</div>
          <div className="footer__desc">Профессиональное проектирование зданий и сооружений.</div>
        </div>

        <div className="footer__col">
          <div className="footer__title">Быстрые ссылки</div>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/services">Наши услуги</NavLink>
          <NavLink to="/projects">Реализованные проекты</NavLink>
          <NavLink to="/contact">Контакты</NavLink>
        </div>

        <div className="footer__col">
          <div className="footer__title">Контакты</div>
          <a href="tel:+998998892586">(+99899) 889 25 86</a>
          <a href="mailto:info@zikkurat.uz">info@zikkurat.uz</a>
          <div className="footer__muted">Ташкент, Узбекистан</div>
        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} Benka. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
