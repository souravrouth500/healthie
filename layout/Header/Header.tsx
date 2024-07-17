import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import path from 'path';
import Link from 'next/link';
import { useAppDispatch } from '@/api/redux/useAppDispatch';
import { logout } from '@/redux-toolkit/slices/userSlice';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/api/redux/useAppSelector';
import { toast } from 'sonner';
import { useHeaderLogo } from '@/api/hooks/cms/hooks/useHeaderLogo';

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { userData, isLoggedIn } = useAppSelector(state => state.userSlice)
  const dispatch = useAppDispatch();
  const router = useRouter()

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

  const initialPages = [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'contact us',
      path: '/contact'
    },
    {
      name: 'login',
      path: '/auth/login'
    },
    {
      name: 'register',
      path: '/auth/register'
    }
  ];

  const authPages = [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'insurances',
      path: '/insurance'
    },
    {
      name: 'contact us',
      path: '/contact'
    },
    {
      name: 'testimonials',
      path: '/testimonials'
    },
    {
      name: 'profile',
      path: '/dashboard/profile'
    },
    {
      name: 'logout',
      path: '/auth/login'
    },
  ]

  let pages = initialPages;
  if (isLoggedIn) { pages = authPages }
  console.log(isLoggedIn);

  const headerLogo = useHeaderLogo()
  console.log('headerlogo', headerLogo);



  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    router.push('/auth/login')
  }

  return (
    <AppBar position="static" sx={{ bgcolor: 'hsl(231deg 76.56% 41.08%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={`${headerLogo}`} alt="" style={{ height: '30px' }} />
          </Box>

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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.path} onClick={() => page.name.toLowerCase() === "logout" && handleLogout()} style={{textDecoration: 'none', textTransform: 'capitalize'}}><Typography textAlign="center">{page.name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', }, mr: 1 }}>
            <img src={`${headerLogo}`} alt="" style={{ height: '30px' }} />
          </Box>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link href={page.path} onClick={() => page.name.toLowerCase() === "logout" && handleLogout()} style={{textDecoration: 'none', color: 'white'}}>{page.name}</Link>
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
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
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
