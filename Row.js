import { MdDeleteForever, MdModeEdit } from 'react-icons/md'
import React from 'react';

export default function Row({ exercise, onDelete, onEdit }) {
  return (
    <tr>
      <td>{exercise.name}</td>

      <td>{exercise.reps}</td>

      <td>{exercise.weight}</td>

      <td>{exercise.unit}</td>

      <td>{exercise.date}</td>

      <td><MdModeEdit className="icon" onClick={ () => onEdit(exercise) }/></td>
      
      <td><MdDeleteForever className="icon" onClick={ () => onDelete(exercise._id) }/></td>
    </tr>
  )
}