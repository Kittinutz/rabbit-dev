import { HeadNav } from '@/components/nav'
export default function MainLayout({ children }) {
  return (
    <>
      <HeadNav />
      <main>{children}</main>
    </>
  )
}