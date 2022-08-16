import Row from './Row.js'
import React from 'react';


export default function Table({ exercises, onDelete, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th> Name </th>
          
          <th> Reps </th>

          <th> Weight </th>

          <th> Unit </th>

          <th> Date </th>

          <th> Edit </th>
          
          <th> Delete </th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise, i) => <Row exercise={exercise} onDelete={onDelete} onEdit={onEdit} key={i}/> )}
      </tbody>
    </table>
  );
} 