import * as React from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

export default class UserInterface extends React.Component<any, any, any> {

    constructor(props: {}) {
        super(props);
        this.state = {
            posts : []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(posts =>  this.setState({ posts }))
          
      }
  render() {
         let {posts} = this.state;
        return (
        <div>
            <h2>Published tweets</h2>
            <Container>
                <Row>
            {this.state.posts.map((p: any) => {
                return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{p.title}</Card.Title>
                            <Card.Text>
                            {p.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
            </Row>
            </Container>
            </div>
            
    
    )
        }
    }
