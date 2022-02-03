import * as React from 'react';
import Container from '@mui/material/Container';
import TopBarContainer from "../src/components/TopBarContainer.tsx"
import HomeMainContainer from "../src/components/HomeMainContainer.tsx";

export default function Index() {
  return (
    <Container disableGutters>
      <TopBarContainer />
      <HomeMainContainer />
    </Container>
  );
}