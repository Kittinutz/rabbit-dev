// import { LandingBanner } from '@/components/banner';
// import { MainLayout } from '@/components/layout/';
import { headerTheme } from "@/components/nav/HeadNav";
import { Box, CircularProgress, Container } from "@mui/material";
import dynamic from "next/dynamic";

const MainLayout = dynamic(
  () => import("@/components/layout/").then((mod) => mod.MainLayout),
  { loading: () => <CircularProgress /> }
);

const LandingBanner = dynamic(() =>
  import("@/components/banner/LandingBanner")
);
const LandingHistory = dynamic(() =>
  import("@/components/banner/LandingHistory")
);

import Head from "next/head";

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Rabbitmansion Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingBanner />
      <LandingHistory />
      <Container>
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Kittinut
          </a>
        </footer>
      </Container>
    </Box>
  );
};

Home.getLayout = (page) => {
  return <MainLayout headerTheme={headerTheme.transparent}>{page}</MainLayout>;
};

export default Home;
