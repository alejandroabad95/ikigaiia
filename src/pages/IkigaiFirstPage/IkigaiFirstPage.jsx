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

    <Row >

      <Col className=' d-flex justify-content-center'> 
        <Ball
        background='#EF476F'
        width='350px'
        height='350px'
        question= {'Te encanta ' + formValues.form1}
        showForm={false}
        />
        <div></div>
      </Col>

    </Row>

    <Row style={{position:'relative', bottom: '150px'}}>

      <Col className='d-flex justify-content-end'>

        <Ball
        background='#FFD166'
        width='350px'
        height='350px'
        question= {'Eres bueno en ' + formValues.form2}
        showForm={false}
        />
      </Col>

      <Col className='d-flex justify-content-start'>
      
        <Ball
        background='#26547C'
        width='350px'
        height='350px'
        question= {'El mundo necesita ' + formValues.form3}
        showForm={false}
        />

      </Col>

    </Row>

    <Row className='' style={{position:'relative', bottom:'300px'}}>

      <Col className='d-flex justify-content-center'>
        <Ball
        background='#06D6A0'
        width='350px'
        height='350px'
        question= {'Te pueden pagar por ' + formValues.form4}
        showForm={false}
        />
      </Col>
      
    </Row>

    <Row>
      <Col className='d-flex justify-content-center'>
        <button className='btnIkigai' onClick={handleIkigaiClick} style={{ position: 'relative', bottom: '700px' }} >IKIGAI</button>
      </Col>  
      <div>
      <h1 className='bg-light d-flex justify-content-center'>Pulsa de nuevo y descubre tu Ikigai</h1>
      </div>

    </Row>

   

    




    {/* <div>
      <h1 style={{ color: 'blue' }}>HOLA {formValues.form2}</h1>
    </div> */}
    
    
  </Container>
    
      
    



)




}



export default IkigaiFirstPage;