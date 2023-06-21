import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <>

        <Container>

        <Row>
        
          <Col>
            <nav className='d-flex justify-content-around'>
              <a href="#" className='index'>Inicio</a>
              <a href="#" className='index'>Ayuda</a>
            </nav>
          </Col>
        </Row>
       
        <Row> 
          <Col className=' d-flex justify-content-center'> 
            <div className='ball' style={{ background: '#EF476F'}}>
              <h2 className='question'>Te encanta hacer</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5' />
              </form>
            </div>
          </Col>
        </Row>

       
        <Row className='d-flex align-items-center mt-3 mb-3'>
          
          <Col className='d-flex justify-content-sm-end justify-content-center'>
            
            <div className='ball' style={{ background: '#FFD166' }}>
              <h2 className='question'>Eres bueno en</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5' />
              </form>
            </div>
          </Col>

          <Col className='d-flex align-items-center justify-content-center text-center'>
            <div className='m-4 m-md-0'>
              <h1 className='mainTitle mb-4'>Encuentra tu camino</h1>
              <button className='btnIkigai'>IKIGAI</button>
            </div>
          </Col>

          <Col className='d-flex justify-content-sm-start justify-content-center'>

            <div className='ball ' style={{ background: '#06D6A0' }}>
              <h2 className='question'>Te pueden pagar</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5' />
              </form>
            </div>

          </Col>
        </Row>
       
        <Row>
          <Col className='d-flex justify-content-center mb-5 mb-md-3'>
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
