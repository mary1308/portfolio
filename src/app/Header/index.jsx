"use client";

import styles from "./style.module.css";

export default function Header() {
  function btnLinkedin() {
    window.open("https://www.linkedin.com/in/mariane-mcosta/");
  }

  return (
    <header className={styles.header}>
      <h1>Portfólio Mariane Costa</h1>

      <div className={styles.menu}>
        <h1>Projetos</h1>
        <h1>Sobre</h1>
        <h1>Contatos</h1>
        <button onClick={btnLinkedin} className={styles["btn-contato"]}>
          Entrar em contato
        </button>
      </div>
    </header>
  );
}
