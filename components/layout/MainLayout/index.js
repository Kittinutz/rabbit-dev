import { HeadNav } from "@/components/nav";
import { Box, styled } from "@mui/system";
const LayoutContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
}));

const LayoutWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: "1",
}));

const Main = styled("main")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: "1",

  "> div": {
    flex: "1",
  },
}));

export default function MainLayout({ children, headerTheme = "transparent" }) {
  return (
    <LayoutContainer>
      <LayoutWrapper>
        <HeadNav theme={headerTheme} />
        <Main>{children}</Main>
      </LayoutWrapper>
    </LayoutContainer>
  );
}
