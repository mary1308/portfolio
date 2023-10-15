import style from "./style.module.css";
import foto from "../../../public/foto.png";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className={style.presentation}>
      <div className={style.text}>
        <h4>
          Olá, eu me chamo Mariane. Sou estudante de UX/UI Desinger e
          programação.
        </h4>

        <p>Moro em São José do Rio Preto, SP – Brasil</p>
        <p>Tenho 23 anos</p>
      </div>
      <Image src={foto} />
    </section>
  );
}
