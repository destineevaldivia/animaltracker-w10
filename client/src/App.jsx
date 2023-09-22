import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import Sightings from './components/Sightings'


function App() {

  return (
    <div className="App">
      <h2 className="maintitle">Animal Tracker for Endangered Marine Life</h2>
      {/* <MyNavBar /> */}
      <Sightings />

    </div>
  )
}

export default App
