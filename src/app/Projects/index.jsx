"use client";

import style from "./style.module.css";
import capaOpino from "../../../public/projects/Opino.png";
import capaImoveis from "../../../public/projects/Imoveis.png";
import capaProduto from "../../../public/projects/Produto.png";
import Image from "next/image";
import { Box, Modal } from "@mui/material";
import { useState } from "react";

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <section className={style.projects}>
        <h3>Projetos</h3>
        <div className={style.projectsCards}>
          <div className={style.card}>
            <h2>UX/UI Designer</h2>
            <div className={style.content}>
              <div className={style.contentChildren} onClick={openModal}>
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

      <Modal open={modalIsOpen}>
        <section className={style.modal}>
          <div className={style.header}>
            <div className={style.text}>
              <h3>Opino</h3>
              <p>Software que reune avaliações de restaurantes. </p>
            </div>
            <Image className={style.capaHeader} src={capaOpino} />
          </div>
          <div className={style.body}>
            <h3>Etapas</h3>
            <div className={style.buttons}>
              <button>Necessidades dos usuários</button>
              <button>Personas de usuário</button>
              <button>Jornada do usuário</button>
              <button>Fluxo do usuário</button>
              <button>Wireframe de baixa fidelidade</button>
              <button>Interface do usuário</button>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
}
