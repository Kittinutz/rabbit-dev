import { HeadNav } from '@/components/nav'
import { Container } from '@mui/material'
export default function MainLayout({ children, headerTheme = "transparent" }) {
  return (
    <>
      <HeadNav theme={headerTheme} />
      <main>
        {children}
      </main>

    </>
  )
}