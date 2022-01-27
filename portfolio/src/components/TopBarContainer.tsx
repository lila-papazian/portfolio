import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, Stack } from '@mui/material';
import LinkedInIcon from './../../public/linkedin.svg';
import TwitterIcon from './../../public/twitter.svg'

export default function TopBarContainer() {

    const pages = ['Projects', 'Experience', 'Articles'];

    return (
        <Box sx={{ width: '90%', paddingTop: "2.5rem", paddingBottom: "2.5rem", margin: "auto" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Stack>
                    <Typography variant="overline" component="h1" fontWeight="bold" fontSize="1.25rem" lineHeight="1.75rem">Lila Papazian</Typography>
                    <Typography variant="overline" component="h2" width="100%" lineHeight="1.50rem">Frontend Developer</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={8} sx={{ display: { xs: 'none', md: 'flex' } }} >
                    {pages.map((page, index) => (
                        <Typography variant="overline" textAlign="center" component="p" key={index}>{page}</Typography>
                    ))}
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Link href="https://twitter.com/lilapapazian">
                        <TwitterIcon aria-label="twitter" />
                    </Link>
                    <Link href="https://ar.linkedin.com/in/lila-papazian">
                        <LinkedInIcon aria-label="linkedin" />
                    </Link>
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