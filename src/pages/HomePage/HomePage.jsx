import { Container, Row, Col } from 'react-bootstrap';


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
    console.log(formValues)
  };

  const navigate = useNavigate()

  const handleIkigaiClick = () => {
    navigate('/ikigai-1');
   
  }

  return (
    <>
        <Container>
       
        <Row> 
          <Col className=' d-flex justify-content-center'> 
            <div className='ball' style={{ background: '#EF476F'}}>
              <h2 className='question'>Te encanta hacer</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                  onChange={(e) => handleChange(e, 'form1')}
                />
              </form>
            </div>
          </Col>
        </Row>

       
        <Row className='d-flex align-items-center mt-3 mb-3'>
          
          <Col className='d-flex justify-content-sm-end justify-content-center'>
            
            <div className='ball' style={{ background: '#FFD166' }}>
              <h2 className='question'>Eres bueno en</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                  onChange={(e) => handleChange(e, 'form2')}
                />
              </form>
            </div>
          </Col>

          <Col className='d-flex align-items-center justify-content-center text-center'>
            <div className='m-4 m-md-0'>
              <h1 className='mainTitle mb-4'>Encuentra tu camino</h1>
              <button className='btnIkigai' onClick={handleIkigaiClick}>IKIGAI</button>
            </div>
          </Col>

          <Col className='d-flex justify-content-sm-start justify-content-center'>

            <div className='ball ' style={{ background: '#26547C'}}>
              <h2 className='question'>El mundo lo necesita</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                  onChange={(e) => handleChange(e, 'form3')}
                />
              </form>
            </div>

          </Col>
        </Row>
       
        <Row>
          <Col className='d-flex justify-content-center mb-5 mb-md-3'>
            <div className='ball' style={{  background: '#06D6A0'}}>
              <h2 className='question'>Te pueden pagar</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                  onChange={(e) => handleChange(e, 'form4')}
                />
              </form>
            </div>
          </Col>
        </Row>
        </Container>
     
    </>
  );
}

export default HomePage;




