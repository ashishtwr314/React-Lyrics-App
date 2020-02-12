import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Index from './components/Index';
import { Provider } from './context';
import Lyrics from './components/Lyrics';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />

            <div className="container">
              <Switch>
                <div>
                  <Route exact path="/" component={Index} />
                  <Route exact path="/lyrics/:id" component={Lyrics} />
                </div>
              </Switch>
            </div>

          </React.Fragment>
        </Router>
        </Provider>
    );
  }
}

export default App;
