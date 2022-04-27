import './App.css';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile';
import Portifolio from './components/Portifolio';
import Header from './components/Header';
import Resume from './components/Resume';
import Footer from './components/Footer';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Container> 
      <Grid
        container
        spacing={3}
        mt={1}
        mb={5}
      >
        <Grid
          item 
          xs={12}
          sm={12}
          md={4} 
          lg={3}
        >
          <Profile />
        </Grid>

        <Grid
          item 
          xs 
        >
          <Router>
            <Header />
            <div className='main-content container_shadow'>
              <Routes>
                <Route exact path="/portfolio" element={<Portifolio />} />
                <Route exact path="/" element={<Resume />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default App;
