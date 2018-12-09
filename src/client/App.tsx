import * as React from 'react';
import './app.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';


const Route1 = () => <>
  <div>
    Route1
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  </div>
</>
const Route2 = () => <>
  <div>
    Route2
  <div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  </div>
</>

export default class App extends React.Component<{}, { username: string }> {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/1" component={Route1} />
          <Route exact={true} path="/2" component={Route2} />
        </div>
      </Router>
    );
  }
}
