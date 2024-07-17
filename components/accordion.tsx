import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IPlan } from '@/typescript/interface/pages/insuranceDetail.interface';
import CheckIcon from '@mui/icons-material/Check';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



function CustomAccordions({ data }: { data: any[] }) {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <>
            {
                data.map((item: IPlan, index: number) => {
                    return (
                        <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)} key={index} sx={{letterSpacing: '2px', lineHeight: '2'}}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>{item.plan_name}</Typography>
                                <Typography>{item.short_desc}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p dangerouslySetInnerHTML={{__html: item.policy_details}} style={{color: 'black'}}/>
                                <Typography variant='h4'>Plan Benefits</Typography>
                                {
                                    item.benifit_array.map((benefit:string, index:number) => {
                                        return (
                                            <Typography variant='body2' key={index} sx={{lineHeight: '2'}}><CheckIcon sx={{fontSize: '16px', verticalAlign: 'middle', mr: 1}}/>{benefit}</Typography>
                                        )
                                    })
                                }
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </>
    )
}

export default CustomAccordions