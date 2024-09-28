import { Home as HomeIcon, Menu as MenuIcon, More as MoreIcon, Search as SearchIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Grid2 as Grid,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import type { FC } from 'react';
import { useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';
import { ThemeProvider } from './ThemeProvider.js';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <AppBar>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Typography component="div" variant="h6">
              Start
            </Typography>
          </Box>
          <Box>
            <Button size="large" variant="contained">
              <HomeIcon />
            </Button>
            <FormControl variant="outlined">
              <Input
                placeholder="What do you want to play?"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box>End</Box>
        </Toolbar>
      </AppBar>
      <Toolbar className="toolbar-spacer" />
      <Container maxWidth={false}>
        <Grid container>
          <Grid size={3}>
            <Paper>Left Col</Paper>
          </Grid>
          <Grid size={9}>
            <div>
              <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
                <img alt="Vite logo" className="logo" src={viteLogo} />
              </a>
              <a href="https://react.dev" rel="noreferrer" target="_blank">
                <img alt="React logo" className="logo react" src={reactLogo} />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button
                onClick={() => {
                  setCount(c => c + 1);
                }}
                type="button"
              >
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
          </Grid>
        </Grid>
      </Container>
      <Toolbar className="toolbar-spacer" />
      <AppBar color="primary" position="fixed" sx={{ bottom: 0, top: 'auto' }}>
        <Toolbar>
          <IconButton aria-label="open drawer" color="inherit">
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default App;
