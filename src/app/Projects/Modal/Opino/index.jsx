import style from "./style.module.css";
import { Box, Modal } from "@mui/material";
import capaOpino from "../../../../../public/projects/Opino.png";
import Image from "next/image";
import StagesAccordion from "./Stages";

export default function ModalOpino({ isOpen, closeModal }) {

    return (
        <Modal open={isOpen} onClose={closeModal}>
            <Box className={style.modal}>
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
                        <StagesAccordion />
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
