import style from "./style.module.css";

export default function Education() {
  return (
    <section className={style.education}>
      <div className={style.hardSkills}>
        <h3>Minha formação</h3>
        <div className={style.cards}>
          <div className={style.card}>
            <h5>Informática para negócios</h5>
            <p>FATEC</p>
            <p>Conclusão Dezembro de 2023</p>
          </div>
          <div className={style.card}>
            <h5>Design de Interfaces</h5>
            <p>Udemy</p>
            <p>Conclusão Janeiro de 2022</p>
          </div>
        </div>
      </div>
      <div className={style.tools}>
        <h3>Ferramentas que uso</h3>
        <ul>
          <li>Figma</li>
          <li>Notion</li>
          <li>Illustrator</li>
        </ul>
      </div>
    </section>
  );
}
