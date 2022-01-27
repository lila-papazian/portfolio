import { Box, Typography, Container } from '@mui/material';
import * as React from 'react';

export default function FooterContainer() {
    return (
        <footer style={{ position: 'sticky', top: '100vh' }}>
            <Container disableGutters>
                <Box sx={{ width: '90%', paddingTop: "2.5rem", paddingBottom: "1rem", margin: "auto" }}>
                    <Typography sx={{
                        backgroundImage: 'linear-gradient(90deg, #7700ea, #6d19e9, #6426e7, #5a2fe5, #5035e3, #463be0, #3c3fdd, #3243da, #2846d6, #1c49d2, #104cce, #004eca)',
                        backgroundClip: "text",
                        textFillColor: "transparent"
                    }} variant="overline" component="h1"> Made by me (duh!) </Typography>
                </Box>
            </Container>
        </footer>
    );
}
