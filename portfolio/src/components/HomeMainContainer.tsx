import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import JavascriptIcon from "../../public/javascript.svg";
import FigmaIcon from "../../public/figma.svg";
import NodeIcon from "../../public/nodejs.svg";
import ReactIcon from "../../public/react.svg";
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function HomeMainContainer() {
    return (
        <>
            <Box sx={{ width: "90%", margin: 'auto', paddingBottom: '1.5rem' }}>
                <Typography variant="overline" component="h1" sx={{ display: { xs: 'block', md: 'none' } }} fontSize='2rem' lineHeight="2rem">
                    Doing dev magic for a more diverse and inclusive space
                </Typography>
                <Typography variant="overline" component="h1" sx={{ display: { xs: 'none', md: 'block' } }} fontSize='3rem' lineHeight="3rem">
                    Doing dev magic for a more diverse and inclusive space
                </Typography>
            </Box>
            <Box sx={{ width: "90%", margin: 'auto', paddingTop: "2.5rem"}} display="flex" justifyContent="flex-start">
                <Stack direction="row" spacing={3}>
                    <JavascriptIcon />
                    <ReactIcon />
                    <NodeIcon />
                    <FigmaIcon />
                </Stack>
            </Box>
            <Box sx={{ width: "90%", margin: 'auto', paddingTop: "2.5rem", paddingBottom: '2.5rem' }} display="flex" justifyContent="flex-end">
                <Button variant="outlined" size="large" startIcon={<MailOutlineIcon htmlColor="#FFF" />} sx={{
                    backgroundImage: 'linear-gradient(90deg, #7700ea, #6d19e9, #6426e7, #5a2fe5, #5035e3, #463be0, #3c3fdd, #3243da, #2846d6, #1c49d2, #104cce, #004eca)',
                }} onClick={() => { }}>
                    <Typography variant="overline" sx={{
                        textFillColor: "#FFF"
                    }} >
                        Contact me
                    </Typography>
                </Button>
            </Box>
        </>
    );
}
