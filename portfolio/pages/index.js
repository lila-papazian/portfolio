import * as React from 'react';
import Container from '@mui/material/Container';
import TopBarContainer from "../src/components/TopBarContainer.tsx"
import MainContainer from "../src/components/MainContainer.tsx";
import FooterContainer from "../src/components/FooterContainer.tsx";

export default function Index() {
  return (
    <Container maxWidth={false} disableGutters sx={{backgroundColor: '#F9F8E77A', height: '100%'}}>
      <TopBarContainer />
      <MainContainer />
      {/* <FooterContainer /> */}
    </Container>
  );
}