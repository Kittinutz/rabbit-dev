import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  IconButton,
  Stack,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { borderRadius, styled } from '@mui/system';
import PropTypes from 'prop-types';
// import Navigation from './Navigation';
export const headerTheme = Object.freeze({
  white: 'white',
  transparent: 'transparent',
});

export const headerDefaultTheme = headerTheme.white;

const Header = styled('header')(({ theme, header_theme: _headerTheme }) => ({
  position: 'sticky',
  background: _headerTheme === headerTheme.transparent ?
    theme.palette.background.navyBlue :
    theme.palette.background.primaryContrast,
  boxShadow: _headerTheme === headerTheme.transparent ?
    'none' :
    theme.palette.shadow.header,
  top: '-1px', // force to hide gap
  left: 0,
  zIndex: 10,
  width: '100%',
  transition: 'all 200ms',
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme.mixins.rem(12)} 0`,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.up('lg')]: {
    flex: '1 1 auto',
  },
}));

const ImageLogo = styled('img')(({ theme }) => ({
  width: theme.mixins.rem(50),
  height: theme.mixins.rem(50),
  marginRight: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.mixins.rem(5)
}))

const NavListMobile = styled(Stack)(({ theme }) => ({
  textTransform: 'uppercase',
  padding: `${theme.mixins.rem(24)} ${theme.mixins.rem(4)} ${theme.mixins.rem(40)}`,

  'a.nav-link': {
    color: theme.palette.text.primary,

    '&.active': {
      color: theme.palette.brand.blue,
    },
  },

  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const NavList = styled(Stack)(({ theme, header_theme: _headerTheme }) => ({
  display: 'none',
  textTransform: 'uppercase',

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',

    'a.nav-link': {
      position: 'relative',
      color: _headerTheme === headerTheme.transparent ?
        theme.palette.text.white :
        theme.palette.text.primary,

      '&.active': {
        ':after': {
          content: '""',
          width: '100%',
          height: theme.mixins.rem(2),
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: theme.mixins.rem(-4),
          borderRadius: theme.mixins.rem(8),
          background: _headerTheme === headerTheme.transparent ?
            theme.palette.text.white :
            theme.palette.brand.blue,
        },
      },
    },
  },
}));

const HamburgerButton = styled(IconButton)(({ theme, header_theme: _headerTheme }) => ({
  color: _headerTheme === headerTheme.transparent ?
    theme.palette.text.white :
    theme.palette.brand.blue,

  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.brand.blue,
}));

const HeadNav = ({ theme: defaultTheme = headerDefaultTheme }) => {
  const [isOpen, setOpen] = useState(false);
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    if (defaultTheme === headerTheme.transparent) {
      const changeTheme = () => {
        const newTheme = window.scrollY >= 80 ?
          headerTheme.white :
          headerTheme.transparent;

        setTheme(newTheme);
      };

      changeTheme();

      window.addEventListener('scroll', changeTheme);

      // returned function will be called on component unmount
      return () => {
        window.removeEventListener('scroll', changeTheme);
      };
    }
  }, [defaultTheme]);

  return (
    <Header header_theme={theme} >
      <Container>
        <HeaderContainer>
          <LogoContainer>
            <Link href="/" style={{ display: 'flex' }}>
              <Grid display="flex" alignItems="center">
                <ImageLogo
                  sizes="(max-width: 500px) 100vw, 500px"
                  srcset="
                  /banner/logo/rabbit-logo_mosgix_c_scale,w_200.png 200w,
                  /banner/logo/rabbit-logo_mosgix_c_scale,w_500.png 500w
                "
                  src="/banner/logo/rabbit-logo_mosgix_c_scale,w_500.png"
                  alt="logo"
                  loading="lazy"
                />
              </Grid>
            </Link>
          </LogoContainer>
          <NavContainer>
            {/* Mobile */}
            <HamburgerButton header_theme={theme} onClick={() => setOpen(true)}>
              <MenuIcon fontSize="large" />
            </HamburgerButton>
            <Drawer
              anchor="right"
              open={isOpen}
              onClose={() => setOpen(false)}
              sx={{
                display: {
                  xs: 'flex',
                  lg: 'none',
                },
              }}
              PaperProps={{
                sx: {
                  // full width
                  top: 0,
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  maxWidth: {
                    sm: '400px',
                  },
                }
              }}
            >
              <Container>
                <HeaderContainer sx={{
                  display: {
                    xs: 'flex',
                    lg: 'none',
                  },
                }}>
                  <LogoContainer>
                    {/* <BlackLogoImage /> */}
                    Logo
                  </LogoContainer>
                  <NavContainer>
                    <CloseButton onClick={() => setOpen(false)}>
                      <CloseIcon fontSize="large" />
                    </CloseButton>
                  </NavContainer>
                </HeaderContainer>
                <NavListMobile spacing={2.5} direction="column">
                  {/* <Navigation /> */}
                  links
                </NavListMobile>
              </Container>
            </Drawer>

            {/* Desktop */}
            <NavList direction="row" spacing={5} header_theme={theme}>
              {/* <Navigation /> */}
              links
            </NavList>
          </NavContainer>
        </HeaderContainer>
      </Container>
    </Header>
  );
};

HeadNav.propTypes = {
  theme: PropTypes.string,
};

export default HeadNav;
