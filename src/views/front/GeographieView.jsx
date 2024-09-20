import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TabsGeographie from '../../components/front/Geographie/TabsGeographie';
import coverHeader from '../../assets/cover-header-avec-logo-40ans.jpg';
import '../../css/home.css';

export default function GeographieView() {
  return (
    <Container maxWidth="xl">
      <Box component="section">
        <img className="mt-5" src={coverHeader} alt="Cover Header" width="100%" />
      </Box>
      <TabsGeographie/>
    </Container>
  );
}
