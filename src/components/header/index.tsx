import * as React from 'react'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import { AppBarStyle } from './header.styles'

const Header: React.FC = () => {
  return (
    <AppBarStyle position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>Logo</Toolbar>
      </Container>
    </AppBarStyle>
  )
}
export default Header
