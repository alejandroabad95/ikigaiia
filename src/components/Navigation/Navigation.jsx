import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'

import './Navigation.css'

//quitar bg para usar css

const Navigation = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (

    <>
            <div className='containerNav'>

            <div className=''>
                <a href="/" className='index'>Inicio</a>
            </div>
            <div className=''>
            <button onClick={handleShow} className='index'>Ayuda</button>
                </div>
                
                
        </div>
        
        <Modal
        show={show}
        onHide={handleClose}
                
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
         <Modal.Title>Pasos para usar Ikigaiia</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>      
            <ol>
                <li>Rellena cada uno de los formularios de las esferas.</li><br/>
                <li>Pulsa el botón Ikigai.</li><br />
                <li>A continuación la IA te propondrá cual podría ser tu pasión, profesión, misión y vocación en base a tus respuestas.</li><br />
                <li>Vuelve a pulsar Ikigai para terminar de descubrir tu propósito.</li><br />
                <li>Si algo sale mal o quieres empezar de nuevo, pulsar el botón Inicio.</li><br />
            </ol>
       
        </Modal.Body>
         </Modal>
    </>
    )
}

export default Navigation

