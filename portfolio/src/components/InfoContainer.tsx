import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function HeroSection() {

    const pages = ['Home', 'Projects', 'Experience', 'Articles'];

    return (
        <Box sx={{ width: '100%', paddingTop: "2.5rem", paddingBottom: "2.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Stack>
                    <Typography variant="overline" component="h1" fontWeight="bold" fontSize="1.25rem" lineHeight="1.75rem">Lila Papazian</Typography>
                    <Typography variant="overline" component="h2" width="100%" lineHeight="1.50rem">Frontend Developer</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={5} sx={{ display: { xs: 'none', md: 'flex' } }} >
                    {pages.map((page, index) => (
                        <Typography variant="overline" textAlign="center" component="p" key={index}>{page}</Typography>
                    ))}
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TwitterIcon htmlColor="#003f5c" fontSize="large" />
                    <LinkedInIcon htmlColor="#003f5c" fontSize="large" />
                    {/* TODO: dark/light theme toggle */}
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3} sx={{ display: { xs: 'flex', md: 'none' }, marginTop: '0.5rem' }} >
                {pages.map((page, index) => (
                    <Typography variant="overline" textAlign="center" key={index} component="p">{page}</Typography>
                ))}
            </Stack>

        </Box>


    );
}