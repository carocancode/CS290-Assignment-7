import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ExerciseTable from '../components/Table';


export default function HomePage({ setExerciseToEdit }) {

  
  const history = useHistory();

 
  const [exercises, setExercises] = useState([]);

  
  const loadExercises = async () => {
    const response = await fetch('/exercises');
    const exercises = await response.json();
    setExercises(exercises);
  }

  

  
  const onDelete = async _id => {

    
   

    
    const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
    if (response.status === 204) {
      setExercises(exercises.filter(e => e._id !== _id));
    } else {
      console.error(`Failed to delete exercise with _id ${_id} with status \
        code = ${response.status}`)
    }
  };

  
  const onEdit = exercise => {
    setExerciseToEdit(exercise);
    history.push('/edit');
  };

  useEffect(() =>  loadExercises(), []);


  return (
    <>
      <h1>Let's Get Fit!</h1>

      <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}/>

      <br/>
<h3 >
      <Link to='/create'>Create your own workout!</Link>
      </h3>
    </>
  )
}