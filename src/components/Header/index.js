import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import resumeData from '../../utils/resumeData';
import { Link, useParams } from 'react-router-dom';

import './Header.css'

const Header = (props) => {
  const params = useParams();
  console.log('para', params);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky" className='appBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            size="large"
            onClick={() => {}}
            color="inherit"
          >
            <HomeIcon className='icon'/>
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/" className='link' >
                    Resumo
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/portifolio" className='link'>
                    Portfolio
                  </Link>
                </MenuItem>
                {Object.keys(resumeData.socials).map(key => (
                  <MenuItem onClick={handleCloseNavMenu}>
                      <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">
                        {resumeData.socials[key].icon}
                      </a>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} justifyContent="space-between">
            <div>
              <Link to="/" className='link'>
                Resumo
              </Link>
              <Link to="/portfolio" className='link'>
                Portfolio
              </Link>
            </div>
            
            <div className='header_right'>
              {Object.keys(resumeData.socials).map(key => (
                <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">
                  {resumeData.socials[key].icon}
                </a>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;