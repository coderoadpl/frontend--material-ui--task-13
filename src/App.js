import React from 'react'

import { Container, Grid, Button, Typography } from '@mui/material'

import { Logout as LogoutIcon } from '@mui/icons-material'

export const App = () => {
  return (
    <Container>
      <Grid
        container={true}
        spacing={1}
      >
        <Grid
          container={true}
          direction={'column'}
          alignItems={'center'}
          spacing={1}
          item={true}
          xs={12}
          sm={6}
        >
          <Grid item={true}>
            <Button
              variant={'contained'}
              color={'primary'}
              startIcon={<LogoutIcon />}
            >
              PRIMARY
            </Button>
          </Grid>
          <Grid item={true}>
            <Button
              variant={'contained'}
              color={'secondary'}
              endIcon={<LogoutIcon />}
            >
              SECONDARY
            </Button>
          </Grid>
          <Grid item={true}>
            <Button
              variant={'contained'}
              color={'info'}
              endIcon={<LogoutIcon />}
            >
              INFO
            </Button>
          </Grid>
        </Grid>
        <Grid
          container={true}
          direction={'column'}
          alignItems={'center'}
          spacing={1}
          item={true}
          xs={12}
          sm={6}
        >
          <Grid item={true}>
            <Button
              variant={'contained'}
              color={'warning'}
              endIcon={<LogoutIcon />}
            >
              WARNING
            </Button>
          </Grid>
          <Grid item={true}>
            <Button
              variant={'contained'}
              color={'error'}
              endIcon={<LogoutIcon />}
            >
              ERROR
            </Button>
          </Grid>
          <Grid item={true}>
            <Button
              variant={'contained'}
              color={'success'}
              endIcon={<LogoutIcon />}
            >
              SUCCESS
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Typography
        variant={'coderoad'}
        component={'div'}
        gutterBottom={true}
      >
        Custom coderoad
      </Typography>
      <Typography
        variant={'h1'}
        component={'div'}
        gutterBottom={true}
      >
        h1. Heading
      </Typography>
      <Typography
        variant={'h2'}
        gutterBottom={true}
        component={'div'}
      >
        h2. Heading
      </Typography>
      <Typography
        variant={'h3'}
        gutterBottom={true}
        component={'div'}
      >
        h3. Heading
      </Typography>
      <Typography
        variant={'h4'}
        gutterBottom={true}
        component={'div'}
      >
        h4. Heading
      </Typography>
      <Typography
        variant={'h5'}
        gutterBottom={true}
        component={'div'}
      >
        h5. Heading
      </Typography>
      <Typography
        variant={'h6'}
        gutterBottom={true}
        component={'div'}
      >
        h6. Heading
      </Typography>
      <Typography
        variant={'subtitle1'}
        gutterBottom={true}
        component={'div'}
      >
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography
        variant={'subtitle2'}
        gutterBottom={true}
        component={'div'}
      >
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography
        variant={'body1'}
        gutterBottom={true}
      >
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography
        variant={'body2'}
        gutterBottom={true}
      >
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography
        variant={'button'}
        display={'block'}
        gutterBottom={true}
      >
        button text
      </Typography>
      <Typography
        variant={'caption'}
        display={'block'}
        gutterBottom={true}
      >
        caption text
      </Typography>
      <Typography
        variant={'overline'}
        display={'block'}
        gutterBottom={true}
      >
        overline text
      </Typography>
    </Container>
  )
}

export default App
