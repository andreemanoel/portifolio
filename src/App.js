import './App.css';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile';
import Portifolio from './components/Portifolio';
import Header from './components/Header';
import Resume from './components/Resume';
import Footer from './components/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Container> 
      <Grid container mt={5}>
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
          ml={5} 
          style={{backgroundColor: 'red'}}
        >
          <Header />
          <Router>
            <Switch>
              <Route path="/portifolio">
                <Portifolio />
              </Route>

              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default App;
