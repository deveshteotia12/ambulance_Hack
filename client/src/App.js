import './App.css';
import Ambulance from './Pages/Ambulance';
import User from './Pages/User';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/ambulance" element={<Ambulance />}></Route>
      <Route exact path="/user" element={<User />}></Route>
    </Routes>
  );
}

export default App;
