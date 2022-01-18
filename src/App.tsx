import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import NewPage from './pages/New';

function App() {

  const theme ={
    primary: "#322153",
    secondary: "#6c63ff",
    background: "#f0f0f5",
    text: "6c6c80",
    white: "#ffff"
  };

  return (
    <ThemeProvider theme={ theme }>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
             <Homepage/>
            </Route>
            <Route path='/new'>
              <NewPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
