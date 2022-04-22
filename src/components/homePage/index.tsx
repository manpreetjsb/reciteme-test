import { useState } from 'react'
import CardActionArea from '@mui/material/CardActionArea'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Rockets from '../Rockets'
import Missions from '../Missions'
import { CardStyle } from './homePage.styles'
import CardContent from '@mui/material/CardContent'

const HomePage = () => {
  const [active, setActive] = useState('')

  const activeWindow = (name: string) => {
    setActive(name)
  }

  return (
    <Container>
      <Grid container my={5} spacing={3}>
        <Grid item sm={6} xs={12}>
          <CardStyle>
            <CardActionArea onClick={() => activeWindow('rocket')}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Rockets
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardStyle>
        </Grid>
        <Grid item sm={6} xs={12}>
          <CardStyle>
            <CardActionArea onClick={() => activeWindow('mission')}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Missions
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardStyle>
        </Grid>
      </Grid>
      <Grid container my={5} spacing={3}>
        <Grid item xs={12}>
          {active === 'rocket' ? (
            <Rockets />
          ) : active === 'mission' ? (
            <Missions />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
