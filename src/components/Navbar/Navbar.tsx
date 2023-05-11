import React, { useState, useEffect, useContext } from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {default as MuiButton} from '@mui/material/Button';
import Button from '../Button/Button';
import MobileButton from '../MobileButton/MobileButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import { styled } from '@mui/material/styles';
import navbarStyles from './NavbarStyles';

const pages = ['Servicios', 'Nosotros', 'Contacto'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type NavbarProps = {};

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => navbarStyles('strive'));

const Navbar: React.FC<NavbarProps> = (props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  })

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar position="static" className={scrolled ? 'scrolled' : ''}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            id="navbar-logo-container"
            className="hidden lg:flex"
            variant="h6"
            noWrap
            component="a"
            href="/"
          >
            DENTCARE
          </Typography>

          <Box className="flex grow lg:hidden" >
            <IconButton
              size="large"
              aria-label="Account of current user"
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
              className="block lg:hidden"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            id="navbar-logo-container"
            className="flex grow lg:hidden "
            variant="h5"
            noWrap
            component="a"
            href=""
          >
            DENTCARE
          </Typography>
          <Box className="hidden grow lg:flex" >
            {pages.map((page) => (
              <MuiButton
                id="navbar-menu-button"
                key={page}
                onClick={handleCloseNavMenu}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </MuiButton>
            ))}
          </Box>

          <Box className="grow-0">
            <Tooltip title="Open settings">
              <div>
                <Button className='hidden lg:inline-block' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  Quiero ser cliente
                </Button>
                <MobileButton className='inline-block lg:hidden'>
                  Quiero ser cliente
                </MobileButton>
              </div>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default Navbar