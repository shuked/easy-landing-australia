import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as Scroll } from 'react-scroll'




export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: '#fff' }} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Scroll to="welcome" smooth='true'>
            <MenuItem onClick={handleClose}>Welcome</MenuItem>
        </Scroll>
        <Scroll to="about-us" smooth='true'>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Scroll>
        <Scroll to="our-project" smooth='true'>
            <MenuItem onClick={handleClose}>Our Priject</MenuItem>
        </Scroll>
        <Scroll to="visa" smooth='true'>
            <MenuItem onClick={handleClose}>Visa</MenuItem>
        </Scroll>
        <Scroll to="contact-us" smooth='true'>
            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        </Scroll>

      </Menu>
    </div>
  );
}
