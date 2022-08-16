import './App.css';
import HomePage from './pages/HomePage.js'
import CreatePage from './pages/CreatePage.js'
import EditPage from './pages/EditPage.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react';


function App() {

  
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>

      <header>
  <h1>Exercise Log</h1>
</header>

<navigation><a href="/">Home</a>  |
  <a href="/create/">Add</a>   
  </navigation>

        <Route path='/' exact>
          <HomePage setExerciseToEdit={setExerciseToEdit}/>
        </Route>

        <Route path='/create'>
          <CreatePage/>
        </Route>

        <Route path='/edit'>
          <EditPage exerciseToEdit={exerciseToEdit} />
        </Route>

      </Router>
      <footer><cite>&copy;</cite>  Carolina Rodriguez 2022  </footer>
    </div>
  );
}

export default App;