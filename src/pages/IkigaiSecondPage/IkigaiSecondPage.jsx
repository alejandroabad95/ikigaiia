import { Container, Row, Col } from 'react-bootstrap';
import "./IkigaiSecondPage.css"
import { useLocation } from 'react-router-dom';


import React from 'react';

function IkigaiSecondPage() {

  const location = useLocation();
    
  const iaValues = location.state?.iaValues || {};

  return (
    
    // Use position: 'relative' for ROWS , top: '50px', mixBlendMode: 'hard-light'
    
      
      
      
    <>
  
    <Container className=''>

    <Row className='' style={{}}>
                  
        <Col style={{position:'relative', right:'210px'}}>
            <h1 className='promptTitle'>Tu pasión podría ser:</h1>
            <p className='prompt'>{iaValues.passion}</p>
        </Col>   
                  
       
                  
        <Col style={{position:'relative', left:'210px'}}>
            <h1 className='promptTitle'>Tu misión podría ser:</h1>
            <p className='prompt'>{iaValues.mission}</p>
        </Col>
    
              </Row>
              
    <Row className='' style={{marginTop:'100px', height:'500px'}}>
        
        <Col className='' style={{position:'relative', bottom:'250px'}}>

            <div className='ikigaiImage'>  </div>
            
            <div style={{position:'relative', bottom:'400px'}}>         
            <h1 className='promptTitle'>Tu ikigai podría ser:</h1>
            <p className='prompt'>{iaValues.ikigai}</p>   
            </div> 
        
        </Col>
                         
    </Row>

    <Row className='' style={{position:'relative', bottom:'200px'}}>
                  
        <Col style={{position:'relative', right:'210px'}}>
          <h1 className='promptTitle'>Tu profesión podría ser:</h1>
          <p className='prompt'>{iaValues.profession}</p>
        </Col>
                
        <Col style={{position:'relative', left:'210px'}}>
          <h1 className='promptTitle'>Tu vocación podría ser:</h1>
          <p className="prompt">{iaValues.vocation}</p>
        </Col>
    
    </Row>
    
    </Container>
    
    </>

  )

}





export default IkigaiSecondPage;