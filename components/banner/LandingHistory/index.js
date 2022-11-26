import { Container, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { CardInfo } from "../../Card";

const SectionLandingHistory = styled(Box)(({ theme }) => ({
  // background +1px for remove jagged edges
  // https://medium.com/pixel-and-ink/avoiding-jagged-edges-on-gradients-f485cc7401f5

  padding: `${theme.mixins.rem(68)} 0 20vw`,
  background: `
    linear-gradient(187.25deg, transparent calc(100% - 15vw), white calc(100% - 15vw + 1px)),
    ${theme.palette.background.grey}
  `,
  color: theme.palette.text.black,

  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.mixins.rem(80),
  },
}));

const LandingHistory = () => {
  return (
    <SectionLandingHistory>
      <Container>
        <Box my={3}>
          <Typography variant="h3">About us</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardInfo
              title="Mama Pimpen"
              imgCover="/banner/card-banner/mam-pimpen.jpeg"
              description="Mama Pimpen is owner of the rabbit mansion hotel.She happy to welcome everyone.If you want anything, Mama always fine to you."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardInfo
              title="Ours room is very clean"
              imgCover="/banner/card-banner/front-view-barista-cleaning-table.jpg"
              description="We always keep the room clean and comfortable to ours customer."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardInfo
              title="Coffee And Restaurant"
              imgCover="/banner/card-banner/coffee-shop-cafe-latte-cappuccino-newspaper-concept.jpg"
              description="Ours Hotel have Coffee shop and Restaurant to serve food and coffee near by swimming pool."
            />
          </Grid>
        </Grid>
      </Container>
    </SectionLandingHistory>
  );
};

export default LandingHistory;
