import 'dotenv/config';
import express from 'express';

import * as exercises from './model.mjs';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());


app.post('/exercises', (req, res) => {

  exercises.createExercise(
    req.body.name,
    req.body.reps,
    req.body.weight,
    req.body.unit,
    req.body.date
  )
  .then(exercise => {
    res.status(201).json(exercise);
  })
  .catch(error => {
    console.error(error);
    res.status(400).json({ Error: 'Invalid request' })
  });

});


app.get('/exercises', (req, res) => {
  exercises.findExercises({}, '', 0)
  .then(exercise => { res.status(201).json(exercise);})   
  .catch(error => { 
    console.error(error) 
    res.status(404).json( { Error: 'Not Found' } )
  });
});


app.put('/exercises/:id', (req, res) => {
  const args = {
    _id: req.params.id,
    name: req.body.name,
    reps: req.body.reps,
    weight: req.body.weight,
    unit: req.body.unit,
    date: req.body.date
  }

  exercises.replaceExercise(args)
    .then(nModified => {
      if (nModified === 1){
        res.json(args) 
      } else {
        res.status(400).json({ Error: 'Invalid Request' })
      }
    })
    .catch(error => {
      console.error(error)
      res.status(500).json({ Error: 'Request failed' })
    });
});


app.delete('/exercises/:id', (req, res) => {
  exercises.deleteExercise(req.params.id)
    .then(deletedCount => {
      if (deletedCount === 1) {
        res.status(204).send()
      } else {
        res.status(404).json({ Error: 'Not Found' })
      }
    })
    .catch(error => {
      console.error(error)
      res.status(400).json({ Error: 'Request failed' })
    });

});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});