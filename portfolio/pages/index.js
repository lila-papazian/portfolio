import * as React from 'react';
import Container from '@mui/material/Container';
import TopBarContainer from "../src/components/TopBarContainer.tsx"
import MainContainer from "../src/components/MainContainer.tsx";

export default function Index() {
  return (
    <Container disableGutters>
      <TopBarContainer />
      <MainContainer />
    </Container>
  );
}