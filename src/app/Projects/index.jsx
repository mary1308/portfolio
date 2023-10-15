import style from "./style.module.css";
import capaOpino from "../../../public/projects/Opino.png";
import capaImoveis from "../../../public/projects/Imoveis.png";
import capaProduto from "../../../public/projects/Produto.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section className={style.projects}>
      <h3>Projetos</h3>
      <div className={style.projectsCards}>
        <div className={style.card}>
          <h2>UX/UI Designer</h2>
          <div className={style.content}>
            <div className={style.contentChildren}>
              <Image className={style.capa} src={capaOpino} />
              <h6>Opino</h6>
            </div>
            <div className={style.contentChildren}>
              <Image className={style.capa} src={capaImoveis} />
              <h6>Imoveis</h6>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <h2>Desenvolvimento</h2>
          <div className={style.content}>
            <div className={style.contentChildren}>
              <Image className={style.capa} src={capaProduto} />
              <h6>Visualização de produtos</h6>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
