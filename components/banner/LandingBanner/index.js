import { Grid } from "@mui/material"
const { Box, styled } = require("@mui/system")

const BannerBackground = styled(Box)(({ theme }) => ({
  width: '50%',
  height: 0,
  borderBottom: `${theme.mixins.rem(500)} solid ${theme.palette.primary.main}`,
  borderLeft: `${theme.mixins.rem(100)} solid transparent`,
  position: 'relative'
}))

const HeroImage = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("/banner/landingbanner.jpeg")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  height: theme.mixins.rem(500),
}))

const LandingBanner = () => {
  return (
    <Box component="section" mt="-75px">
      <HeroImage>
      </HeroImage>
      <BannerBackground >
        <Box>
          Helloworld
        </Box>
      </BannerBackground>
    </Box>
  )
}
export default LandingBanner