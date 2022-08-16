
import mongoose from 'mongoose';
import 'dotenv/config';


mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", (err) => {
    if(err){
        
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to ExercisesLog MongoDB exercise collection using Mongoose.');
      }
      
});



const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
  });
  
  
  const Exercise = mongoose.model('Exercise', exerciseSchema);
  
 
  export async function createExercise(name, reps, weight, unit, date) {
    const exercise = new Exercise({
      name: name,
      reps: reps,
      weight: weight,
      unit: unit,
      date: date
    });
    return await exercise.save();
  }
  
  
  export async function findExercises(filter, projection, limit) {
    const query = Exercise.find(filter)
      .select(projection)
      .limit(limit);
    return query.exec();
  }
  

  export async function replaceExercise({ _id, name, reps, weight, unit, date }) {
    // console.log(_id, name, reps, weight, unit, date)
    const result = await Exercise.replaceOne( {_id: _id},
      { name: name, reps: reps, weight: weight, unit: unit, date: date });
  
    console.log(result);
    return result.nModified;
  }
  
  
  export async function deleteExercise(_id) {
    const result = await Exercise.deleteOne( {_id: _id} )
    return result.deletedCount;
  }




