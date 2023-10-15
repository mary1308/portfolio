import style from "./style.module.css";
import iconSearch from "../../../public/icons/search.png";
import iconCommunication from "../../../public/icons/communication.png";
import iconEmpaty from "../../../public/icons/empaty.png";
import iconCreation from "../../../public/icons/creation.png";
import iconScreens from "../../../public/icons/screens.png";
import Image from "next/image";

export default function Skills() {
  return (
    <section className={style.skills}>
      <h3>Minhas habilidades</h3>
      <div className={style.texts}>
        <div className={style.divs}>
          <Image src={iconSearch} />
          <p>
            <strong>Resolução de Problemas:</strong> Demonstro habilidade para
            identificar e solucionar desafios de maneira eficiente, utilizando
            análise crítica e abordagens criativas para lidar proativamente com
            situações complexas.
          </p>
        </div>
        <div className={style.divs}>
          <Image src={iconCommunication} />
          <p>
            <strong>Comunicação Eficaz:</strong> Possuo capacidade de expressão
            clara e objetiva, envolvendo uma escuta atenta e a habilidade de
            transmitir informações de forma compreensível para garantir uma
            comunicação eficaz.
          </p>
        </div>
        <div className={style.divs}>
          <Image src={iconEmpaty} />
          <p>
            <strong>Empatia:</strong> Busco compreender os sentimentos e
            perspectivas alheias, adotando uma postura de colocar-me no lugar do
            outro. Esta abordagem sensível permite considerar diversos pontos de
            vista e agir com sensibilidade às necessidades dos demais.
          </p>
        </div>
        <div className={style.divs}>
          <Image src={iconCreation} />
          <p>
            <strong>Prototipagem na Criação de Telas:</strong> No processo de
            criação de telas, a prototipagem desempenha um papel crucial.
            Realizo esboços e testes rápidos de layouts e funcionalidades,
            permitindo ajustes antes da implementação final. Essa abordagem ágil
            otimiza a experiência do usuário, garantindo telas intuitivas e
            eficazes.
          </p>
        </div>
        <div className={style.divs}>
          <Image src={iconScreens} />
          <p>
            <strong>Design Responsivo:</strong> No contexto do design
            responsivo, a prototipagem é fundamental. Iterativamente, desenvolvo
            e testo versões da interface em diferentes dispositivos, ajustando o
            layout para garantir uma experiência consistente em variados
            tamanhos de tela. Esse processo dinâmico assegura que o design seja
            adaptável, proporcionando usabilidade otimizada em diversos
            contextos.
          </p>
        </div>
      </div>
    </section>
  );
}
