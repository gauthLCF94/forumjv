import React from 'react';

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './config/theme'

import { Provider } from 'react-redux'
import { store } from './config/store'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header/index'
import Footer from './components/footer/index'
import PostList from './components/post/index';
import PostDetails from './components/post/postDetails';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <Router>
          <SApp>
            <Header></Header>
            <Switch>
              <Route path="/" exact={true} component={ PostList }></Route>
              <Route path="/details" exact={true} component={ PostDetails }></Route>
            </Switch>
          </SApp>
          <Footer></Footer>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

const SApp = styled.div`
  background: ${ props => props.theme.white };
  color: ${ props => props.theme.black };
 `
