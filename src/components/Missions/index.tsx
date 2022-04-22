import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { IMissions } from './Missions.types'

const Missions: React.FC = () => {
  const [missionsData, setMissionsData] = useState<IMissions[]>([])
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((res) => setMissionsData(res))
      .catch((err) => console.log(err))
  }, [])
  const readMore = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <Box>
      <Typography component={'h4'}>Missions</Typography>
      <Grid container>
        {missionsData.map((item) => {
          return (
            <Box mb={3} key={item.mission_id}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.mission_name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                </CardContent>
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  px={1}
                >
                  <Grid item>
                    <Button
                      size='small'
                      onClick={() => readMore(item.wikipedia)}
                    >
                      Wikipedia
                    </Button>
                  </Grid>
                  <Grid item>Manufacturers : {item.manufacturers[0]}</Grid>
                </Grid>
              </Card>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Missions
