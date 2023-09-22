import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import Sightings from './components/Sightings'
import AddSightingsForm from './components/AddSightingsForm';


function App() {



  return (
    <div className="App">
      
      <h2 className="maintitle">Animal Tracker </h2>
      <MyNavBar />
      <Sightings />

    </div>
  )
}

export default App
