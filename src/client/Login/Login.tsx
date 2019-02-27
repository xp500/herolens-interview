import * as React from 'react';

export default class Login extends React.Component<{}, {username: ''}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
    };
  }

  doLogin = (e:any) => {
    e.preventDefault();
    fetch(`/api/user/:${this.state.username}`)
    .then(res => console.log(res))
    //then redirect
  }

  setUsername = (e:any) => {
    const username = e.target.value;
    this.setState({username})
  }

  render() {
    return (
      <>
        <div className="loginForm">
          <form action="">
            <label htmlFor="username">Usuario</label>
            <input type="text" name="username" id="username" onChange={e => this.setUsername(e)} />
            <input type="submit" value="Ingresar" onClick={e => this.doLogin(e)}/>
          </form>
        </div>
      </>
    );
  }
}
