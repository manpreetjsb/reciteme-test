import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { IRockets } from './Rockets.types'
import { CardActionsStyle } from './Rockets.styles'

const Rockets = () => {
  const [rocketsData, setRocketsData] = useState<IRockets[]>([])
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.json())
      .then((res) => setRocketsData(res))
      .catch((err) => console.log(err))
  }, [])

  const readMore = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <Box>
      <Typography component={'h4'}>Rockets</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {rocketsData.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={item.id}
              display='flex'
              style={{
                position: 'relative',
              }}
            >
              <Card>
                <CardMedia
                  component='img'
                  height='140'
                  image={item.flickr_images[0]}
                  alt={item.rocket_name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.rocket_name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                  <Box mt={2}>
                    <Typography variant='body2' color='text.secondary'>
                      <strong>Active : {item.active ? 'Yes' : 'No'}</strong>
                    </Typography>
                  </Box>
                </CardContent>
                <CardActionsStyle>
                  <Button size='small' onClick={() => readMore(item.wikipedia)}>
                    Read More
                  </Button>
                </CardActionsStyle>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Rockets
