import style from "./style.module.css";
import Img from "../../../public/experience/Field Control.png";
import Image from "next/image";

export default function Experience() {
  return (
    <section className={style.experience}>
      <h3>Minhas experiências na área</h3>
      <div className={style.imgCard}>
        <Image className={style.img} src={Img} />
        <div className={style.card}>
          <h5>Estágiaria UX Designer</h5>
          <p>2022 → 2023</p>
          <p>Field Control</p>
        </div>
      </div>
    </section>
  );
}
