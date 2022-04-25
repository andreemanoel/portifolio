import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

import './Button.css'

const IButton = ({text}) => {
  return (
    <Button endIcon={<DownloadIcon />} className="custom_btn"> 
      {text}
    </Button>
  );
}

export default IButton;
