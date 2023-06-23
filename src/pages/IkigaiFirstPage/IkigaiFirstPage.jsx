import { Container, Row, Col } from 'react-bootstrap';
import "./IkigaiFirstPage.css"
import Ball from '../../components/Ball/Ball';

function IkigaiFirstPage () {
 
  const handleIkigaiClick = () => {
  }
   

return (
    

  // Use position: 'relative' for ROWS , top: '50px', mixBlendMode: 'hard-light' 
  
  <Container>

    <Row>
      <Col>
        
        <Ball
        background='#EF476F'
        width='300px'
        height='300px'
        question='Te encanta hacer'
        showForm={false}
        />
      </Col>
    </Row>
    
    
  </Container>
    
      
    



)




}



export default IkigaiFirstPage;