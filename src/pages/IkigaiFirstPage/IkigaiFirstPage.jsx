import { Container, Row, Col } from 'react-bootstrap';
import "./IkigaiFirstPage.css"

function IkigaiFirstPage () {
    




 
  const handleIkigaiClick = () => {
  }
   

return (
    

  // Use position: 'relative' for ROWS , top: '50px', mixBlendMode: 'hard-light' 
  
  <Container fluid>

    

    <Row className='' style={{ position: 'relative', top: '150px', mixBlendMode: 'hard-light' }}> 

      <Col className='d-flex justify-content-center'>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Col>
          
    
          <Col className=' d-flex justify-content-center'> 
            <div className='ball' style={{ background: '#EF476F'}}>
              <h2 className='question'>Te encanta hacer</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                />
            </form>
          
          <button>ikigai</button>


        </div>
      
      </Col>
      
      <Col className='d-flex justify-content-center'>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Col>
      
      
      
     
        </Row>

       
        <Row className='d-flex align-items-center mt-3 mb-3'>
          
          <Col className='d-flex justify-content-sm-end justify-content-center'>
            
            <div className='ball' style={{ background: '#FFD166' }}>
              <h2 className='question'>Eres bueno en</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                 
                />
              </form>
            </div>
          </Col>

          

          <Col className='d-flex justify-content-sm-start justify-content-center'>

            <div className='ball ' style={{ background: '#26547C'}}>
              <h2 className='question'>El mundo necesita</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                 
                />
              </form>
            </div>

          </Col>
        </Row>
       
        <Row className="" style={{position: 'relative', bottom: '150px', mixBlendMode:'hard-light'}}>
          <Col className='d-flex justify-content-center mb-5 mb-md-3'>
            <div className='ball' style={{background: '#06D6A0', position:'relative',mixBlendMode:'hard-light' }}>
              <h2 className='question'>Te pueden pagar</h2>
              <form action="" method="post" className=''>
                <input type="text" className='custom-form mt-5'
                 
                />
              </form>
            </div>
      </Col>
    </Row>

    <Row className='' style={{ position: 'relative', bottom: '120px' }}>

      <Col className='d-flex justify-content-center'>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Col>
      



      <Col className='d-flex justify-content-center mb-5 mb-md-3'>
        <h1 className='mainTitle'>Pulsa de nuevo y descubre tu ikigai</h1>
      </Col>

        <Col className='d-flex justify-content-center'>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Col>
      
    </Row>

  
    
    
  </Container>
    
      
    



)




}



export default IkigaiFirstPage;