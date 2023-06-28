import { Container, Row, Col } from 'react-bootstrap';
import "./IkigaiFirstPage.css"
import Ball from '../../components/Ball/Ball';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import config from '../../config'

import React from 'react';

function IkigaiFirstPage() {
  
  const handleIkigaiClick = () => {
  }
  const location = useLocation();
  const formValues = location.state?.formValues || {};


  //useState for openAI
  const [passion, setPassion] = useState('');
  const [mission, setMission] = useState('');
  const [profession, setProfession] = useState('');
  const [vocation, setVocation] = useState('');
  
  useEffect(() => {
    const fetchOpenAIResponses = async () => {
      try {
        // Obtener respuesta para la pasión
        const passionResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi pasión si me encanta ${formValues.form1} y soy bueno ${formValues.form2}?`
        );
        setPassion(passionResponse);
        // Obtener respuesta para la misión
        const missionResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi misión si me encanta ${formValues.form1} y el mundo necesita ${formValues.form3}?`
        );
        setMission(missionResponse);

        // Obtener respuesta para la profesión
        const professionResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi profesión si soy bueno ${formValues.form2} y me pueden pagar por ${formValues.form4}?`
        );
        setProfession(professionResponse);

        // Obtener respuesta para la vocación
        const vocationResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi vocación si me puden pagar por ${formValues.form4} y el mundo necesita ${formValues.form3}?`
        );
        setVocation(vocationResponse);
      } catch (error) {
        console.error('Error calling OpenAI API:', error);
        // Manejar el error de manera apropiada
      }
    };

    fetchOpenAIResponses();
  }, [formValues]);
  
  const getOpenAIResponse = async (prompt) => {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 10
      })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
  }
    ;


  return (
    
    // Use position: 'relative' for ROWS , top: '50px', mixBlendMode: 'hard-light'
  
    <Container>

      <Row className='' style={{ height: '200px' }}>
      
        <Col>
          <h1 className='promptTitle'>Tu pasión podría ser:</h1>
          <p className='prompt'>{passion}</p>
        </Col>

        <Col style={{ position: 'relative', top: '250px', left: '200px' }}>
          <h2 className='secondTitle'>Pasión</h2>
        </Col>
      
      
      
        <Col className=' d-flex justify-content-center'>
          <Ball
            background='#EF476F'
            width='350px'
            height='350px'
            mixBlendMode='hard-light'
            question={'Te encanta ' + formValues.form1}
            showForm={false}
        
          />
        </Col>

        <Col style={{ position: 'relative', top: '250px', right: '210px' }}><h2 className='secondTitle'>Misión</h2></Col>
      
        <Col className=''>
          <h1 className='promptTitle'>Tu misión podría ser:</h1>
          <p className='prompt'>{mission}</p>
        </Col>

     
      
      
      </Row>

      <Row style={{ height: '200px' }}>

        <Col className='d-flex justify-content-end'>

          <Ball
            background='#FFD166'
            width='350px'
            height='350px'
            mixBlendMode='hard-light'
            question={'Eres bueno en ' + formValues.form2}
            showForm={false}
          />
        </Col>

        <Col className='d-flex justify-content-start'>
      
          <Ball
            background='#26547C'
            width='350px'
            height='350px'
            mixBlendMode='hard-light'
            question={'El mundo necesita ' + formValues.form3}
            showForm={false}
          />

        </Col>

      </Row>

      <Row className=''>
        <Col>
          <h1 className='promptTitle'>Tu profesión podría ser:</h1>
          <p className='prompt'>{profession}</p>
        </Col>
        <Col style={{ position: 'relative', left: '200px', top: '50px' }}><h2 className='secondTitle'>Profesión</h2></Col>

        <Col className='d-flex justify-content-center'>
          <Ball
            background='#06D6A0'
            width='350px'
            height='350px'
            mixBlendMode='hard-light'
            question={'Te pueden pagar por ' + formValues.form4}
            showForm={false}
          />
        </Col>

        <Col style={{ position: 'relative', top: '50px', right: '210px' }}><h2 className='secondTitle'>Vocación</h2></Col>
        <Col>
          <h1 className='promptTitle'>Tu vocación podría ser:</h1>
          <p className="prompt">{vocation}</p>
      
        </Col>
      
        
      </Row>

      <Row className=''>
        <Col className='d-flex justify-content-center'>
          <button className='btnIkigai' onClick={handleIkigaiClick} style={{ position: 'relative', bottom: '400px' }} >IKIGAI</button>
        </Col>
        <div className='' style={{ position: 'relative', bottom: '30px' }}>
          <h1 className='mainTitle d-flex justify-content-center'>Pulsa de nuevo y descubre tu Ikigai</h1>
        </div>
      </Row>
    
    </Container>
    
      
    



  )

}





export default IkigaiFirstPage;