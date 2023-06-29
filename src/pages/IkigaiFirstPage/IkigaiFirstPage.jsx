import { Container, Row, Col } from 'react-bootstrap';
import "./IkigaiFirstPage.css"
import Ball from '../../components/Ball/Ball';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config'


import React from 'react';

function IkigaiFirstPage() {
  

  const navigate = useNavigate();

  const location = useLocation();

  const formValues = location.state?.formValues || {};


  //useState for openAI
  const [iaValues, setIaValues] = useState({

    passion: '',
    mission: '',
    profession: '',
    vocation: '',
    ikigai: '',

  }

  )

  // const [passion, setPassion] = useState('');
  // const [mission, setMission] = useState('');
  // const [profession, setProfession] = useState('');
  // const [vocation, setVocation] = useState('');
  // const [ikigai, setIkigai] = useState('');
  
  
  useEffect(() => {
    const fetchOpenAIResponses = async () => {
      try {
        // Passion Response
        const passionResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi pasión si me encanta ${formValues.form1} y soy bueno ${formValues.form2}?`
        );

        setIaValues({ ...iaValues, passion: passionResponse });

        // Mission Response
        const missionResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi misión si me encanta ${formValues.form1} y el mundo necesita ${formValues.form3}?`
        );

        setIaValues({ ...iaValues, mission: missionResponse });

        // Profession Response
        const professionResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi profesión si soy bueno ${formValues.form2} y me pueden pagar por ${formValues.form4}?`
        );

        setIaValues({ ...iaValues, profession: professionResponse });

        // Vocation Response
        const vocationResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi vocación si me puden pagar por ${formValues.form4} y el mundo necesita ${formValues.form3}?`
        );
        
        setIaValues({ ...iaValues, vocation: vocationResponse });

        // Ikigai Response
        const ikigaiResponse = await getOpenAIResponse(
          `¿Cuál podría ser mi Ikigai si me encanta ${formValues.form1}, soy bueno ${formValues.form2}, el mundo necesita ${formValues.form3} y me pueden pagar por ${formValues.form4}?`
        );
        setIaValues({ ...iaValues, ikigai: ikigaiResponse });


      } catch (error) {
        console.error('Error calling OpenAI API:', error);
        setIaValues({
          ...iaValues,
          passion: 'La IA no funciona, dale a inicio e inténtalo de nuevo',
          mission: 'La IA no funciona, dale a inicio e inténtalo de nuevo',
          profession: 'La IA no funciona, dale a inicio e inténtalo de nuevo',
          vocation: 'La IA no funciona, dale a inicio e inténtalo de nuevo',
          ikigai: 'La IA no funciona, dale a inicio e inténtalo de nuevo',
        });
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
  

  const handleIkigaiClick = () => {

    navigate('/ikigai-2', { state: { iaValues } });

  }


  return (
    
    // Use position: 'relative' for ROWS , top: '50px', mixBlendMode: 'hard-light'
  
    <Container>

      <Row className='' style={{ height: '200px' }}>
      
        <Col>
          <h1 className='promptTitle'>Tu pasión podría ser:</h1>
          <p className='prompt'>{iaValues.passion}</p>
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
          <p className='prompt'>{iaValues.mission}</p>
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
          <p className='prompt'>{iaValues.profession}</p>
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
          <p className="prompt">{iaValues.vocation}</p>
      
        </Col>
      
        
      </Row>

      <Row className=''>
        <Col className='d-flex justify-content-center'>
          <button className='btnIkigai' onClick={handleIkigaiClick} style={{ position: 'relative', bottom: '510px' }} >IKIGAI</button>
        </Col>
        <div className='' style={{ position: 'relative', bottom: '70px' }}>
          <h1 className='mainTitle d-flex justify-content-center'>Pulsa de nuevo y descubre tu Ikigai</h1>
        </div>
      </Row>
    
    </Container>
    
      
    



  )

}





export default IkigaiFirstPage;