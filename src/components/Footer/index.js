import { Typography } from '@mui/material';
import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>André Emanoel</Typography>
      </div>

      <div className='footer_right'>
        <Typography className='footer_copyright'>©2022 Developed by André Emanoel</Typography>
      </div>
    </div>
  );
}

export default Footer;
