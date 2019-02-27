import * as React from 'react';
import Card from './Card/Card';

export default class SignUp extends React.Component<{}, {posts: [{}]}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {title:'Title1', text: 'Text1'},
        {title:'Title2', text: 'Text2'},
        {title:'Title3', text: 'Text3'},
      ],
    };
  }
  render() {
    const cards = this.state.posts.map(post => {
      <Card cardtitle={post.title} cardtext={post.text}/>
    })
    return (
      <>
        <div className="dashboard">
          <div className="cards-container">
            {cards ? cards : null}
          </div>
        </div>
      </>
    );
  }
}
