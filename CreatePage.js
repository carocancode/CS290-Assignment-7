import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {

  const history = useHistory();

  
  const [name, setName] = useState('name');
  const [reps, setReps] = useState('reps');
  const [weight, setWeight] = useState('weight');
  const [unit, setUnit] = useState('enter lb/kg');
  const [date, setDate] = useState('enter date');

  
  const addExercise = async () => {
    
    const newExercise = {name, reps, weight, unit, date};

    const response = await fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 201) {
      alert("Exercise has been added!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    
    history.push('/');
  }

  return (
    <div>
      <h1>Create your own Workout!</h1>

        <fieldset>
        
        <label for="name">Exercise Name</label> 
          <input id="name"
            type="text"
            placeholder="exercise"
            value={name}
            onChange={e => setName(e.target.value)}
          /> 

          <label for="reps">Reps</label> 
          <input id="reps"
            type="number"
            min="0"
            placeholder=""
            value={reps}
            onChange={e => setReps(e.target.value)}
          /> 

          <label for="weight">Weight</label> 
          <input id="weight"
            type="number"
            min="0"
            placeholder=""
            value={weight}
            onChange={e => setWeight(e.target.value)}
          /> 

          <label for="unit">Unit</label> 
          <input id="unit"
            type="text"
            placeholder=""
            value={unit}
            onChange={e => setUnit(e.target.value)}
          /> 


          <label for="date">Date</label> 
          <input id="date"
            type="text"
            placeholder=""
            value={date}
            onChange={e => setDate(e.target.value)}
          /> 

          <button onClick={addExercise}> Add </button>
          
        </fieldset>

    </div>
  )

}