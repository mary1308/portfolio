import style from "./style.module.css";
import iconInstagram from "../../../public/icons/contact/Instagram.png";
import iconBehance from "../../../public/icons/contact/Behance.png";
import iconLinkedIn from "../../../public/icons/contact/LinkedIn.png";
import iconGitHub from "../../../public/icons/contact/GitHub.png";
import iconEmail from "../../../public/icons/contact/Email.png";
import Image from "next/image";

export default function Footer() {
  return (
    <section className={style.footer}>
      <div className={style.icons}>
        <a href="https://www.instagram.com/mary.1308">
          <Image className={style.icon} src={iconInstagram} />
        </a>
        <a href="https://www.behance.net/designdamari">
          <Image className={style.icon} src={iconBehance} />
        </a>
        <a href="https://www.linkedin.com/in/mariane-mcosta/">
          <Image className={style.icon} src={iconLinkedIn} />
        </a>
        <a href="https://github.com/mary1308">
          <Image className={style.icon} src={iconGitHub} />
        </a>
        <a href="mailto:mariane.mcosta2020@gmail.com">
          <Image className={style.icon} src={iconEmail} />
        </a>
      </div>
      <a href="http://github.com/mary1308">Desenvolvido por Mariane Costa</a>
    </section>
  );
}
