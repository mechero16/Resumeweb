import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

function Content (props){
    
      return (
        <Card style={{ width: '14rem' }} bg="dark" text='white'>
        <Card.Body style={{fontFamily:' "Poppins", sans-serif;',fontSize:"2vw"}}>
          <Card.Title style={{marginBottom:'2vw'}}>{props.title}</Card.Title>
            <Card.Text style={{fontFamily:' "Poppins", sans-serif;',fontSize:"1vw",fontWeight:'lighter'}}>
            {props.dis}
          </Card.Text>
          <Card.Link href="#" style={{fontFamily:' "Poppins", sans-serif;',fontSize:"1vw",fontWeight:'lighter'}} >more</Card.Link>
        </Card.Body>
      </Card>
      );
        
    
}
export default Content;

