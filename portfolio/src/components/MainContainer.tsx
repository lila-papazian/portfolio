import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import JavascriptIcon from "../../public/javascript.svg";
import FigmaIcon from "../../public/figma.svg";
import NodeIcon from "../../public/nodejs.svg";
import ReactIcon from "../../public/react.svg";

export default function TopBarContainer() {
    return (
        <>
            <Box sx={{ width: "75%", margin: 'auto', paddingBottom: '2.5rem' }}>
                <Typography variant="overline" component="h1" sx={{ display: { xs: 'block', md: 'none' }}} fontSize='2rem' lineHeight="2rem">
                    Doing dev magic for a diverse and inclusive space
                </Typography>
                <Typography variant="overline" component="h1" sx={{ display: { xs: 'none', md: 'block' }}} fontSize='3rem' lineHeight="3rem">
                    Doing dev magic for a diverse and inclusive space
                </Typography>
            </Box>
            <Box sx={{ width: "90%", margin: 'auto', paddingTop: "2.5rem", paddingBottom: '2.5rem' }} display="flex" justifyContent="flex-end">
            <Stack direction="row" spacing={3}>
                <JavascriptIcon />
                <ReactIcon />
                <NodeIcon />
                <FigmaIcon />
            </Stack>
            </Box>
            {/* <Box sx={{ width: "90%", margin: 'auto', paddingTop: "2.5rem", paddingBottom: '2.5rem' }} >
                <Stack direction="row" display="flex" justifyContent="space-between" flexWrap='wrap'>
                    <Stack>
                        <Typography variant="overline" component="h3" sx={{ fontWeight: '400' }} fontSize='1rem' lineHeight="2rem">
                            Projects
                    </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="overline" component="h3" sx={{ fontWeight: '400' }} fontSize='1rem' lineHeight="2rem">
                            Articles
                    </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="overline" component="h3" sx={{ fontWeight: '400' }} fontSize='1rem' lineHeight="2rem">
                            Talks
                    </Typography>
                    </Stack>
                </Stack>
            </Box> */}
        </>
    );
}
