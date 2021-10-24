import {
  Container,
  Grid, Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
const BannerBackground = styled(Box)(({ theme }) => ({
  width: '50%',
  height: 0,
  borderBottom: `${theme.mixins.rem(500)} solid ${theme.palette.primary.main}`,
  borderLeft: `${theme.mixins.rem(100)} solid transparent`,
  position: 'relative'
}))

const HeroImage = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.3)), url("/banner/landingbanner.jpeg")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  backgroundAttachment: 'fixed',
  height: '100vh',
}))

const ReviewImage = styled('img')(({ theme }) => ({
  width: theme.mixins.rem(120),
}))
const LandingBanner = () => {
  return (
    <Box component="section" mt="-75px">
      <HeroImage>
        <Grid
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="400">
            <Typography
              color="secondary"
              variant="h3"
              textAlign="center"
              fontWeight="bold"
            >
              Rabbitmansion Hotel
            </Typography>
            <Box mt={1}>
              <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Typography variant="body1" fontWeight="bold">Reviews from another platform</Typography>
                <Box mt={4} textAlign="center">
                  <Grid container display="flex" alignItems="center" justifyContent="center" spacing={3}>
                    <Grid item>
                      <Box mx={2}>
                        <ReviewImage src="/banner/platform/booking/review.jpg" alt="review-booking" />
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                        >
                          Rabbitmansion
                          Booking.com
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box mx={2}>
                        <ReviewImage src="/banner/platform/booking/review.jpg" alt="review-booking" />
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                        >
                          Rabbitmansion2
                          Booking.com
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Container>
        </Grid>
        {/* <BannerBackground >

        </BannerBackground> */}
      </HeroImage>
    </Box>
  )
}
export default LandingBanner