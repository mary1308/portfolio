"use client"

import AccordionMui from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Icon } from "@iconify/react";

export default function Accordion({ title, content }) {

    return (
        <>
            <AccordionMui sx={{
                width: '100%',
                display: 'flex',
                // gap: '1rem',
                flexDirection: 'column',
                boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '8px !important',
                background: 'transparent',
                "&:before": {
                    background: "transparent"
                }
            }}>
                <AccordionSummary
                    expandIcon={<Icon icon={"icon-park-outline:down"} color={'#EA638C'} />}
                    sx={{
                        background: '#FFD9DA',
                        color: '#EA638C',
                        fontWeight: '600',
                        fontSize: '1.25rem',
                        borderRadius: '8px'
                    }}
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: '1rem',
                    }}
                >
                    {content}
                </AccordionDetails>
            </AccordionMui >
        </>

    )
}