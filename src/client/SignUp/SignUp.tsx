import * as React from 'react';

export default class SignUp extends React.Component<{}, {username: ''}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
    };
  }

  doSignup = (e:any) => {
    e.preventDefault();
    fetch('api/user', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username}),
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  setUsername = (e:any) => {
    const username = e.target.value;
    this.setState({username})
  }

  render() {
    return (
      <>
        <div className="signupForm">
          <form action="">
            <label htmlFor="username">Elegir Usuario</label>
            <input type="text" name="username" id="username" onChange={e => this.setUsername(e)} />
            <input type="submit" value="Ingresar" onClick={e => this.doSignup(e)}/>
          </form>
        </div>
      </>
    );
  }
}
