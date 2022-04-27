import React from 'react';
import Button from '@mui/material/Button';

import './Button.css'

const IButton = ({text, icon, handleDownload}) => {
  return (
    <Button endIcon={icon} className="custom_btn" onClick={handleDownload}> 
      {text}
    </Button>
  );
}

export default IButton;
