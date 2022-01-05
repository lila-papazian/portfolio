import * as React from 'react';
import Typography from '@mui/material/Typography';
import { RoughNotation } from "react-rough-notation";
import { Box, Container } from '@mui/material';

export default function TopBarContainer() {

    return (
        <Box sx={{ width: "90%", margin: 'auto'}}>
            <Typography variant="h4" component="h1" color="#FFF" sx={{ display: { xs: 'block', md: 'none' }, letterSpacing: '0,08333em', textTransform: 'uppercase', fontWeight: '400' }}>
                {RoughTitle()}
            </Typography>
            <Typography variant="h2" component="h1" color="#FFF" sx={{ display: { xs: 'none', md: 'block' } ,letterSpacing: '0,08333em', textTransform: 'uppercase', fontWeight: '400' }}>
                {RoughTitle()}
            </Typography>
        </Box>
    );
}

const RoughTitle = () => {
    return (
    <RoughNotation type="highlight" show={true} color="#003f5c" animate={false} multiline>
        Doing Magic With React 
    </RoughNotation>);
};

