import React, { useState } from 'react';
import '../index.css';

const Formulaire = () => {

  const [technologies, setTechnologies] = useState({
    postgreSQL: false,
    react: false,
    nodeJS: false,
    php: false,
    selenium: false,
  });

  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [test, setTest] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleCheckboxChange = (name) => {
    setTechnologies((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleHoursChange = (event) => {
    const { value } = event.target;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setHoursPerWeek(value);
    }
  };

  const handleTestChange = (event) => {
    setTest(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Filter the technologies that are selected (i.e., true)
    const selectedTechnologies = Object.keys(technologies).filter(
      (tech) => technologies[tech] === true
    );

    console.log(selectedTechnologies, hoursPerWeek, test);
  
    try {
      // Send the POST request with the selected technologies, hours per week, and test 
      const response = await fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            selectedTechnologies,
            hoursPerWeek,
            test,
        }),
      });
  
      // Parse the response from the server
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  
    // Log the selected technologies, hours per week, and test 
    console.log("Technologies sélectionnées:", selectedTechnologies);
    console.log("Heures par semaine:", hoursPerWeek);
    console.log("Will take the test:", test);
  };

  return (
    <div>
        <div>
            <h3 >Recruiting developers Form</h3>
        </div>

    <form onSubmit={handleSubmit}>
      <div className="question-container">
        <label style={{ marginBottom: '50px' }}>
          1- Which of these technologies do you have experience with?
        </label>
        <div
          className={`tech-button ${technologies.postgreSQL ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange('postgreSQL')}
        >
          PostgreSQL
        </div>
        <div
          className={`tech-button ${technologies.react ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange('react')}
        >
          React
        </div>
        <div
          className={`tech-button ${technologies.nodeJS ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange('nodeJS')}
        >
          NodeJS
        </div>
        <div
          className={`tech-button ${technologies.php ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange('php')}
        >
          PHP
        </div>
        <div
          className={`tech-button ${technologies.selenium ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange('selenium')}
        >
          Selenium or similar web automation
        </div>
      </div>

      <div>
        <label style={{ marginBottom: '0px' }}>
          2- How many hours are you able to work per week?*
        </label>
        <input
          type="number"
          className='form-control'
          value={hoursPerWeek}
          onChange={handleHoursChange}
          placeholder="10"
          min="0"
        />
      </div>
&nbsp;
      <div   >
        <label style={{ margintop: '20px'   }}>
          3- Would you be willing to take a programming test that takes approximately 1 hour to complete? The test is hard, and you will get paid $20 ONLY if you pass the test. If you complete the test, I can give you a lot of projects.*
        </label>
        <div className="test-options">
  <div
    className={`test-button ${test === 'yes' ? 'active' : ''}`}
    onClick={() => handleTestChange({ target: { value: 'yes' } })}
  >
    Yes
  </div>
  <div
    className={`test-button ${test === 'no' ? 'active' : ''}`}
    onClick={() => handleTestChange({ target: { value: 'no' } })}
  >
    No
  </div>
</div>

      </div>

      <div className="info-box" style={{ marginTop: '20px' }}>
        <p>
        If you bid exactly the amount of $5 on the upwork project, then I will accept your bid, and pay you immediately (well, I will check every second day or so). I will also send you the PostgreSQL test. If you pass the test on your first attempt, then I will send you a bonus of $20 as promised.
        </p>
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Formulaire;
