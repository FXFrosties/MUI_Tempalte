import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGorup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #000)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15, 
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 24,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true);

  return( 
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon = {<DeleteIcon/>}
          checkedIcon = {<SaveIcon/>}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'primary checkbox'
          }}
        />
      }
      label = "Testing Checkbox"
    />
      
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI THEMING
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1" component="div">
              Learn how to use materialUI
            </Typography>
            <ButtonStyled/>

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}> 
                <Paper style={{height: 75, width: '100%'}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height: 75, width: '100%'}}/>
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{height: 75, width: '100%'}}/>
              </Grid>
            </Grid>


            <TextField 
              variant="filled"
              color="secondary"
              type="email"
              label="the time"
              placeholder="testing@test.com"
            />
            <CheckboxExample />
            <ButtonGorup variant="contained" color="primary">
              <Button 
                startIcon={<SaveIcon />}
                href="#" 
                onClick={() => alert("hello")} 
                size="large"
              >
                Save
              </Button>
              <Button 
                startIcon={<DeleteIcon />}
                href="#" 
                onClick={() => alert("hello")}       
                size="large"
              >
                Discard
              </Button>
            </ButtonGorup>
            
              
            <img src={logo} className="App-logo" alt="logo" />
      
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
