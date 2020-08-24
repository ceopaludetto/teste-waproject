import * as React from "react";
import { FiHeart } from "react-icons/fi";

import { Container } from "../container";

import s from "./index.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.inner}>
          <FiHeart className={s.icon} /> Made with love by{" "}
          <a href="https://github.com/ceopaludetto" target="_blank" rel="noopener noreferrer">
            Carlos Eduardo
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}
