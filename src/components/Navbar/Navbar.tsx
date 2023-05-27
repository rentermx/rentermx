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
const pagesHref = ['/#options-section', '/#benefits-section', '/location'];

type NavbarProps = {};

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => navbarStyles('konfio'));

const Navbar: React.FC<NavbarProps> = (props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
              {pages.map((page, i) => (
                <a key={`navbar-button-${i}`} href={pagesHref[i]} style={{color: 'inherit', textDecoration: 'none'}}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </a>
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
            {pages.map((page, i) => (
              <MuiButton
                id="navbar-menu-button"
                key={page}
                onClick={handleCloseNavMenu}
                href={pagesHref[i]}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </MuiButton>
            ))}
          </Box>

          <Box className="grow-0">
            <Button href="/location" className="hidden lg:inline-block">
              Quiero ser cliente
            </Button>
            <MobileButton href="/location" className="inline-block lg:hidden">
              Quiero ser cliente
            </MobileButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default Navbar