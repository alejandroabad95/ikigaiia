import { Container, Row, Col } from 'react-bootstrap';
import Ball from '../../components/Ball/Ball';

import "./HomePage.css"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  
  //local state to save data for each form
  const [formValues, setFormValues] = useState({
    form1: '',
    form2: '',
    form3: '',
    form4: '',
  });

  const handleChange = (e, formName) => {
    setFormValues({ ...formValues, [formName]: e.target.value });
   
  };

  const navigate = useNavigate()

  
  const handleIkigaiClick = () => {
     console.log(formValues.form1)
    if (
      formValues.form1 !== '' &&
      formValues.form2 !== '' &&
      formValues.form3 !== '' &&
      formValues.form4 !== ''
    ) {
      navigate('/ikigai-1', { state: { formValues } });
    }
    else {
      alert('Rellena todos los formularios antes de enviar')
    }
   
  }

  return (
    <>
        <Container>
       
        <Row> 
          <Col className=' d-flex justify-content-center'> 
            <Ball
              background = "#EF476F"
              width = "280px"
              height = "280px"
              question = 'Te encanta hacer'
              showForm = {true}
              handleChange = {handleChange}
              formName = 'form1'
            />
          </Col>
        </Row>

       
        <Row className='d-flex align-items-center mt-5 mt-md-0 mb-5 mb-md-0'>
          
          <Col className='d-flex justify-content-sm-end justify-content-center'>

            <Ball
              background = "#FFD166"
              width = "280px"
              height = "280px"
              question = 'Eres bueno en'
              showForm = {true}
              handleChange = {handleChange}
              formName = 'form2'
            />

          </Col>

          <Col className='d-flex align-items-center justify-content-center text-center'>
            <div className='m-4 m-md-0'>
              <h1 className='mainTitle mb-4'>Encuentra tu camino</h1>
              <button className='btnIkigai' onClick={handleIkigaiClick}>IKIGAI</button>
            </div>
          </Col>

          <Col className='d-flex justify-content-sm-start justify-content-center'>

            <Ball
              background = "#26547C"
              width = "280px"
              height = "280px"
              question = 'El mundo necesita'
              showForm = {true}
              handleChange = {handleChange}
              formName = 'form3'
            />
            
          </Col>
        </Row>
       
        <Row className='d-flex align-items-center mb-3'>
          <Col className='d-flex justify-content-center mb-1 mb-md-1'>
            <Ball
              background = "#06D6A0"
              width = "280px"
              height = "280px"
              question = 'Te pueden  pagar por'
              showForm = {true}
              handleChange = {handleChange}
              formName = 'form4'
            />
          </Col>
        </Row>
        </Container>
     
    </>
  );
}

export default HomePage;




