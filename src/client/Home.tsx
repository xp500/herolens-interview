import * as React from 'react';
import './app.css';
import ReactImage from './react.png';
import { Link } from 'react-router-dom';

export default class App extends React.Component<{}, { username: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: null
    };
  }

  componentDidMount() {
    fetch('/api/user/test')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <>
        <div>
          {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          <img src={ReactImage} width={200} alt="react" />
        </div>
        <div>
          <Link to="/1">
            <button>Route1</button>
          </Link>
          <Link to="/2">
            <button>Route2</button>
          </Link>
        </div>
      </>
    );
  }
}
