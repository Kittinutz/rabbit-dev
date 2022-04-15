import { Container, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

const SectionLandingHistory = styled(Box)(({ theme }) => ({
  // background +1px for remove jagged edges
  // https://medium.com/pixel-and-ink/avoiding-jagged-edges-on-gradients-f485cc7401f5

  padding: `${theme.mixins.rem(68)} 0 20vw`,
  background: `
    linear-gradient(187.25deg, transparent calc(100% - 15vw), white calc(100% - 15vw + 1px)),
    ${theme.palette.background.grey}
  `,
  color: theme.palette.text.black,

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.mixins.rem(80),
  },
}));

const LandingHistory = () => {
  return (
    <SectionLandingHistory>
      <Container>
        <Typography variant="h3">About us</Typography>
        <Grid>
          <Box>
          </Box>
        </Grid>
      </Container>
    </SectionLandingHistory>
  );
};


export default LandingHistory;