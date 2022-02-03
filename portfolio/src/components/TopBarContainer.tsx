import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as MuiLink } from '@mui/material';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import LinkedInIcon from './../../public/linkedin.svg';
import TwitterIcon from './../../public/twitter.svg'

export default function TopBarContainer() {

    const pages = [{ path: '/projects', name: 'Projects' }, { path: '/experience', name: 'Experience' }, { path: '/articles', name: 'Articles' }];

    const displayPages = (pagesArray) => {
        return (
            <>
                {pagesArray.map((page, index) => (
                    <Link href={page.path} passHref>
                        <MuiLink variant='overline'>{page.name}</MuiLink>
                    </Link>))}
            </>
        )
    }

    return (
        <Box sx={{ width: '90%', paddingTop: "2.5rem", paddingBottom: "2.5rem", margin: "auto" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Stack>
                    <Link href="/" passHref>
                        <MuiLink underline="none">
                            <Typography variant="overline" component="h1" fontWeight="bold" fontSize="1.25rem" lineHeight="1.75rem">Lila Papazian</Typography>
                            <Typography variant="overline" component="h2" width="100%" lineHeight="1.50rem">Frontend Developer</Typography>
                        </MuiLink>
                    </Link>
                </Stack>
                {/* <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={8} sx={{ display: { xs: 'none', md: 'flex' } }} >
                    {displayPages(pages)}
                </Stack> */}
                <Stack direction="row" spacing={3}>
                    <MuiLink href="https://twitter.com/lilapapazian">
                        <TwitterIcon aria-label="twitter" />
                    </MuiLink>
                    <MuiLink href="https://ar.linkedin.com/in/lila-papazian">
                        <LinkedInIcon aria-label="linkedin" />
                    </MuiLink>
                    {/* TODO: dark/light theme toggle */}
                </Stack>
            </Stack>
            {/* <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3} sx={{ display: { xs: 'flex', md: 'none' }, marginTop: '0.5rem' }} >
                {displayPages(pages)}
            </Stack> */}
        </Box>
    );
}
