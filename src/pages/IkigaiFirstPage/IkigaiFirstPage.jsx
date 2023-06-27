import { Container, Row, Col } from 'react-bootstrap';
import "./IkigaiFirstPage.css"
import Ball from '../../components/Ball/Ball';
import { useLocation } from 'react-router-dom';


import React from 'react';

function IkigaiFirstPage () {
 
  const handleIkigaiClick = () => {
  }
  const location = useLocation();
  const formValues = location.state?.formValues || {};

return (
    
  // Use position: 'relative' for ROWS , top: '50px', mixBlendMode: 'hard-light'
  
  <Container>

    <Row className='' style={{height: '200px'}}>
      
      <Col><p className='question'>Tu pasión podría ser:</p></Col>

      <Col style={{position:'relative', top:'250px', left:'200px'}}><h2 className='secondTitle'>Pasión</h2></Col>
      
      
      
      <Col className=' d-flex justify-content-center'> 
        <Ball
        background='#EF476F'
        width='350px'
        height='350px'
        mixBlendMode='hard-light'
        question= {'Te encanta ' + formValues.form1}
          showForm={false}
          mixBlendMode
        />
      </Col>
      <Col style={{ position: 'relative', top: '250px', right: '210px' }}><h2 className='secondTitle'>Misión</h2></Col>
      
      <Col className=''><p className='question'>Tu misión podría ser:</p></Col>

     
      
      
    </Row>

    <Row style={{height: '200px'}}>

      <Col className='d-flex justify-content-end'>

        <Ball
        background='#FFD166'
        width='350px'
        height='350px'
        mixBlendMode='hard-light'
        question= {'Eres bueno en ' + formValues.form2}
        showForm={false}
        />
      </Col>

      <Col className='d-flex justify-content-start'>
      
        <Ball
        background='#26547C'
        width='350px'
        height='350px'
        mixBlendMode='hard-light'
        question= {'El mundo necesita ' + formValues.form3}
        showForm={false}
        />

      </Col>

    </Row>

    <Row className=''>
      <Col><p className='question'>Tu profesión podría ser:</p></Col>
      <Col style={{position:'relative', left:'200px', top: '50px'}}><h2 className='secondTitle'>Profesión</h2></Col>

      <Col className='d-flex justify-content-center'>
        <Ball
        background='#06D6A0'
        width='350px'
        height='350px'
        mixBlendMode='hard-light'
        question= {'Te pueden pagar por ' + formValues.form4}
        showForm={false}
        />
      </Col>

        <Col style={{position:'relative',top:'50px',right:'210px'}}><h2 className='secondTitle'>Vocación</h2></Col>
        <Col><p className='question'>Tu vocación podría ser:</p></Col>
      
        
    </Row>

    <Row className=''>
      <Col className='d-flex justify-content-center'>
        <button className='btnIkigai' onClick={handleIkigaiClick} style={{ position: 'relative', bottom: '400px' }} >IKIGAI</button>
      </Col>  
      <div className='' style={{position:'relative', bottom:'30px'}}>
        <h1 className='mainTitle d-flex justify-content-center'>Pulsa de nuevo y descubre tu Ikigai</h1>
      </div>
    </Row>
    
  </Container>
    
      
    



)




}



export default IkigaiFirstPage;