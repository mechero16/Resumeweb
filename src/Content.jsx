import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

function Content (props){
    
      return (
        <Card style={{ width: '14rem' }} bg="dark" text='white'>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.dis}
          </Card.Text>
          <Card.Link href="#">more</Card.Link>
        </Card.Body>
      </Card>
      );
        
    
}
export default Content;

