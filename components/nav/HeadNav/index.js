import { Container } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'


export default function HeadNav() {
  return (
    <Box>
      <Container>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
        </ul>
      </Container>
    </Box>
  )
}