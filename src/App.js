import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/index";
import store from "./store"
import styled from "styled-components";
import { Provider } from "react-redux";
import signup from "./sign-up/signup";
import backgroundImage from './assets/images/background.jpg'




const Container = styled.div`
background-image: url(${backgroundImage});
//  background-repeat: repeat-x;
`;



class App extends Component {
  render() {
    return (
      <Container>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/sign-up' component={signup} />
            </Switch>
          </Router>
        </Provider>
      </Container>
    )
  }
}
export default App