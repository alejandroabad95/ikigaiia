import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <>

        <Container className='d-flex flex-column'>
    
        <Row>
          
          <Col className='d-flex justify-content-center align-items-center'>
            <a href="#" className='index'>Inicio</a>
          </Col>

          <Col className='d-flex justify-content-center align-items-center'>
            <div className='ball mt-2' style={{ background: '#EF476F'}}>
              <h2 className='question'>Te encanta hacer</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5' />
              </form>
            </div>
          </Col>

          <Col className='d-flex justify-content-center align-items-center'>
            <a href="#" className='index'>Instrucciones</a>
          </Col>
        </Row>

       
        <Row style={{height:'27vh'}}>
          <Col className='d-flex justify-content-center align-content-center'>
            <div className='ball' style={{ background: '#FFD166' }}>
              <h2 className='question'>Eres bueno en</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5' />
              </form>
            </div>
          </Col>
        

          <Col className='d-flex justify-content-center'>
            <div className='d-flex flex-column justify-content-center mb-5'>
              <h1 className='mainTitle'>Encuentra tu camino</h1>
              <div className="text-center">
                <button className=' mt-3 btnIkigai'>IKIGAI</button>
              </div>
            </div>
          </Col>

          <Col className='d-flex justify-content-center'>
            <div className='ball' style={{ background: '#06D6A0' }}>
              <h2 className='question'>Te pueden pagar</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5' />
              </form>
            </div>
          </Col>
        </Row>
      
     

       
        <Row>
          <Col className='d-flex justify-content-center'>
            <div className='ball' style={{ background: '#26547C' }}>
              <h2 className='question'>El mundo lo necesita</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5' />
              </form>
            </div>
          </Col>
        </Row>
      
        </Container>
     
    </>
  );
}

export default App;
