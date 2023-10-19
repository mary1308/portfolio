"use client";

import style from "./style.module.css";
import capaOpino from "../../../public/projects/Opino.png";
import capaImoveis from "../../../public/projects/Imoveis.png";
import capaProduto from "../../../public/projects/Produto.png";
import Image from "next/image";
import { useState } from "react";
import { ModalOpino, ModalImoveis } from "./Modal";

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState({
    opino: false,
    imoveis: false
  });
  const openModal = (id) => {
    if (id === "opino") {
      setModalIsOpen({
        opino: true,
        imoveis: false
      });

    } else {
      setModalIsOpen({
        opino: false,
        imoveis: true
      });
    }
  };

  const closeModal = (id) => {
    setModalIsOpen((modals) => ({
      ...modals,
      [id]: false
    }));
  };

  return (
    <>
      <section className={style.projects}>
        <h3>Projetos</h3>
        <div className={style.projectsCards}>
          <div className={style.card}>
            <h2>UX/UI Designer</h2>
            <div className={style.content}>
              <div className={style.contentChildren} onClick={() => openModal("opino")}>
                <Image className={style.capa} src={capaOpino} />
                <h6>Opino</h6>
              </div>
              <div className={style.contentChildren} onClick={() => openModal("imoveis")}>
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
      <ModalOpino isOpen={modalIsOpen.opino} closeModal={() => closeModal("opino")} />
      <ModalImoveis isOpen={modalIsOpen.imoveis} closeModal={() => closeModal("imoveis")} />
    </>
  );
}
