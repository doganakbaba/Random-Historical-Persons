import Persons from './Persons';
import { useState } from 'react';
import './App.css';


function getRandomPerson() {

  const personArray = ['Aristo', 'Ataturk', 'Che', 'Einstein', 'Jesus', 'Newton', 'Napolyon', 'Sezar', 'Iskender'];
  return personArray[Math.floor(Math.random() * personArray.length)]
}


function App() {

  const [persons, setPersons] = useState([])

  const handleClick = () => {
    setPersons([...persons, getRandomPerson()])

  }

  const personList = persons.map((person, index) => {
    return <Persons key={index} personName={person} />;
  });

  return (
    <div>

      <button className='appButton' onClick={handleClick}>Show Historical Person</button>

      <div className='personList'>
        {personList}
      </div>








    </div>
  )
}

export default App
