import * as React from 'react';


export default class SignUp extends React.Component<{}, {likes: 0}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      likes: 0
    };
  }
  render() {
    return (
      <>
        <div className="card">
          <h3>{this.props.cardtitle}</h3>
          <p>{this.props.cardtext}</p>
        </div>
      </>
    );
  }
}
