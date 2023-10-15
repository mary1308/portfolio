import style from "./style.module.css";
import iconLinkedIn from "../../../public/icons/contact/LinkedIn.png";
import iconEmail from "../../../public/icons/contact/Email.png";
import iconGitHub from "../../../public/icons/contact/GitHub.png";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={style.contact}>
      <h3>Vamos nos conhecer melhor?</h3>
      <div className={style.content}>
        <p>Me mande um “oi” pelo LinkedIn!</p>
        <Image className={style.icon} src={iconLinkedIn} />
        <a href="http://linkedin.com/in/mariane-mcosta/">
          linkedin.com/in/mariane-mcosta/
        </a>
      </div>
      <div className={style.content}>
        <p>Ou, se preferir, fale comigo por e-mail:</p>
        <Image className={style.icon} src={iconEmail} />
        <a href="mailto:mariane.mcosta2020@gmail.com">
          mariane.mcosta2020@gmail.com
        </a>
      </div>
      <div className={style.content}>
        <p>Meu GitHub:</p>
        <Image className={style.icon} src={iconGitHub} />
        <a href="http://github.com/mary1308">github.com/mary1308</a>
      </div>
    </section>
  );
}
