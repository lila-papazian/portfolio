import * as React from 'react';
import Container from '@mui/material/Container';
import ResponsiveAppBar from "../src/components/ResponsiveAppBar.tsx";


export default function Index() {
  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />    
    </Container>
  );
}