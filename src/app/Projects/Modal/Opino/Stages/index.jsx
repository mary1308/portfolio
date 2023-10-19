"use client"

import Accordion from "@/app/Projects/Components/Accordion";
import style from "./style.module.css";
import userVanessa from "../../../../../../public/projects/Opino/PersonaUsuarioVanessa.png";
import userAntonio from "../../../../../../public/projects/Opino/PersonaUsuarioAntonio.png";
import userJourney from "../../../../../../public/projects/Opino/JornadaUsuario.png";
import userFlows from "../../../../../../public/projects/Opino/FluxoUsuario.png";
import lowFidelity from "../../../../../../public/projects/Opino/BaixaFidelidade.png";

import Image from "next/image";

export default function StagesAccordion() {

    return (
        <>
            <Accordion
                title={
                    <h1>Necessidades dos usuários</h1>
                }

                content={
                    <ol className={style.gap}>
                        <li>
                            <h5 className={style.title}>Com que frequência você procura por restaurantes para sair para comer?</h5>
                            <p>1 a 2 vezes por semana.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Quais são os principais critérios que você considera ao escolher um restaurante?</h5>
                            <p>Pratos feitos, avaliações, o que é servido, horários e dias de funcionamento.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Você costuma confiar nas avaliações de outros usuários ao decidir onde comer?</h5>
                            <p>Sim, sempre verifico se há indicações ou se alguém conhece o lugar.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Que tipo de informações você considera essenciais ao pesquisar um restaurante (por exemplo, menu, preço, localização, etc.)?</h5>
                            <p>Pratos feitos, avaliações, o que é servido, horários e dias de funcionamento.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Quais são os principais desafios que você enfrenta ao procurar por restaurantes atualmente?</h5>
                            <p>Boas comidas, boas avaliações, e boas localizações.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Você prefere explorar diferentes opções de restaurantes ou prefere ter recomendações personalizadas com base em suas preferências?</h5>
                            <p>As duas opções, estou aberto a novas experiências, mas me sinto mais confortável quando há avaliações sobre o local.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Como você geralmente faz a busca por restaurantes (por exemplo, sites, aplicativos, mídias sociais)?</h5>
                            <p>Sim, normalmente no Instagram, Google, Facebook.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Que tipo de interações ou recursos você acha úteis ao visualizar as avaliações de um restaurante?</h5>
                            <p>Avaliações com estrelas onde possa ter um breve comentário e também fotos.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Você gostaria de poder filtrar os resultados de acordo com suas preferências (por exemplo, preço, tipo de culinária, classificação)?</h5>
                            <p>Sim.</p>
                        </li>
                        <li>
                            <h5 className={style.title}>Como você se sentiria em relação a compartilhar sua própria avaliação de restaurantes dentro do aplicativo?</h5>
                            <p>Me sentiria bem em poder ajudar outras pessoas.</p>
                        </li>
                    </ol>

                }
            />

            <Accordion
                title={
                    <h1>Personas de usuário</h1>
                }

                content={
                    <div>
                        <Image src={userVanessa} />
                        <Image src={userAntonio} />
                    </div>

                }
            />

            <Accordion
                title={
                    <h1>Jornada do usuário</h1>
                }

                content={
                    <Image src={userJourney} />
                }
            />

            <Accordion
                title={
                    <h1>Fluxos de usuário</h1>
                }

                content={
                    <Image src={userFlows} />
                }
            />

            <Accordion
                title={
                    <h1>Wireframes de baixa fidelidade</h1>
                }

                content={
                    <Image src={lowFidelity} />
                }
            />

            <Accordion
                title={
                    <h1>Interface do usuário versão mobile</h1>
                }

                content={
                    <div>
                        <iframe style={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            height: "800px"
                        }}
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbWTLhYOU6HTmvmv12oqOTQ%2FApp-avalia%25C3%25A7ao-de-restaurante-Opino%3Ftype%3Ddesign%26node-id%3D2-7167%26t%3Dmi5DBLzeCMKpZWtT-1%26scaling%3Dscale-down%26page-id%3D1%253A2%26mode%3Ddesign" allowfullscreen>

                        </iframe>
                    </div>

                }
            />

            <Accordion
                title={
                    <h1>Interface do usuário versão desktop</h1>
                }

                content={
                    <div>
                        <iframe style={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            width: "800px",
                            height: "500px"
                        }}
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbWTLhYOU6HTmvmv12oqOTQ%2FApp-avalia%25C3%25A7ao-de-restaurante-Opino%3Ftype%3Ddesign%26node-id%3D32-75%26t%3DTBjmAYDWuD1RQd76-1%26scaling%3Dscale-down-width%26page-id%3D1%253A3%26starting-point-node-id%3D32%253A75%26mode%3Ddesign&hide-ui=1" allowfullscreen>

                        </iframe>
                    </div>

                }
            />
        </>
    )
}