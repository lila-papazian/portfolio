import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const pages = ['Home', 'Projects', 'Articles'];

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ padding: '5px' }}>
                        Logo
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Typography sx={{ padding: '10px' }} textAlign="center">{page}</Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}