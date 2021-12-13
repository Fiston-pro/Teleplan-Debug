import React, { useState, useEffect } from 'react';
import { AssistantCard } from "./assistantCard"
import JsonData from '../data/assistantdata.json'

export const Assistant = (props) => {

    const questions = [
		{
			questionText: 'Does the Unit Power Up?',
		},
		{
			questionText: 'Are the wires connected well?',
		},
		{
			questionText: 'Open the unit and check if there is visible damage around power supply, Can you see one?',
			
		},
		{
			questionText: 'Change that Component and start over',
			end: true,
		},
	];
    
    const [showAssistant, setShowAssistant] = useState(false)
    const [assistant, setAssistant] = useState({});
    useEffect(() => {
        setAssistant(JsonData);
    }, []);
    
    //no sense
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const nextQuestion = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
	};

    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                 <div className='col-md-8 col-md-offset-2 intro-text'>
                 {showAssistant ? <AssistantCard data={questions[currentQuestion]} next={nextQuestion} closeAssistant={()=>{setCurrentQuestion(0); setShowAssistant(false)}}/> :
                     <div>
                        <h1>
                            Debug assistant
                            <span></span>
                        </h1>
                        
                        <a
                            onClick={()=>setShowAssistant(true)}
                            className='btn btn-custom btn-lg page-scroll'
                        >
                        Launch
                        </a>
                        {' '}
                     </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  