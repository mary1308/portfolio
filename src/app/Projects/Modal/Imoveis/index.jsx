import style from "./style.module.css";
import { Box, Modal } from "@mui/material";
import capaImoveis from "../../../../../public/projects/Imoveis.png";
import Image from "next/image";

export default function ModalImoveis({ isOpen, closeModal }) {

    return (
        <Modal open={isOpen} onClose={closeModal}>
            <Box className={style.modal}>
                <div className={style.header}>
                    <div className={style.text}>
                        <h3>Imoveis</h3>
                        <p>Wireframe de média fidelidade para um aplicativo de localização de imóveis. </p>
                    </div>
                    <Image className={style.capaHeader} src={capaImoveis} />
                </div>
                <div className={style.body}>
                    <iframe
                        style={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            height: "800px"
                        }}
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fp3tpFMfYDUntd2PH7SrbeV%2FPortf%25C3%25B3lio%3Ftype%3Ddesign%26node-id%3D364-415%26t%3D0Ij3Ub29EtbluizE-1%26scaling%3Dscale-down%26page-id%3D364%253A414%26starting-point-node-id%3D364%253A415%26mode%3Ddesign" allowfullscreen>
                    </iframe>
                </div>
            </Box>
        </Modal>
    )
}
