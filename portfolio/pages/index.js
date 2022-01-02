import * as React from 'react';
import Container from '@mui/material/Container';
import InfoContainer from "../src/components/InfoContainer.tsx"

export default function Index() {
  return (
    <Container maxWidth={false} disableGutters>
      <InfoContainer />
    </Container>
  );
}