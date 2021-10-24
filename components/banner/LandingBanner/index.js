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
  backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.3)), image-set(
    url("/banner/landingbanner-1x.png") 1x,
    url("/banner/landingbanner-2x.png") 2x)`,
  backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.3)), -webkit-image-set(
    url("/banner/landingbanner-1x.png") 1x,
    url("/banner/landingbanner-2x.png") 2x)`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  backgroundAttachment: 'fixed',
  height: '100vh',
}))

const ReviewImage = styled('img')(({ theme }) => ({
  width: theme.mixins.rem(80),
  borderRadius: theme.mixins.rem(8)
}))

const LaddingContent = styled(Container)(({ theme }) => ({
  backdropFilter: `blur(4px)`,
  maxWidth: theme.mixins.rem(400),

  [theme.breakpoints.up('sm')]: {
    maxWidth: theme.mixins.rem(800),
  },
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
          <LaddingContent maxWidth="400">
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
                  <Grid container display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Grid container display="flex" alignItems="center" justifyContent="center" my={2}>
                      <Box mx={2}>
                        <ReviewImage
                          sizes="(max-width: 600px) 100vw, 600px"
                          srcset="
                            /banner/platform/booking/rabbit1-review_baa4yh_c_scale,w_200.jpg 200w,
                            /banner/platform/booking/rabbit1-review_baa4yh_c_scale,w_600.jpg 600w"
                          src="/banner/platform/booking/rabbit1-review_baa4yh_c_scale,w_600.jpg"
                          alt="rabbit1-review from booking.com"
                        />
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                        >
                          Rabbitmansion
                        </Typography>
                      </Box>
                      <Box mx={2}>
                        <ReviewImage
                          sizes="(max-width: 600px) 100vw, 600px"
                          srcset="
                            /banner/platform/booking/rabbit2-review_ixx2mq_c_scale,w_200.jpg 200w,
                            /banner/platform/booking/rabbit2-review_ixx2mq_c_scale,w_600.jpg 600w"
                          src="/banner/platform/booking/rabbit2-review_ixx2mq_c_scale,w_600.jpg"
                          alt="rabbit2 review from booking.com"
                        />
                        <Typography
                          variant="body1"
                          fontWeight="bold" rab
                        >
                          Rabbitmansion 2
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </LaddingContent>
        </Grid>
      </HeroImage>
    </Box>
  )
}
export default LandingBanner