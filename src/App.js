import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Classroom Helper!</h1>
      <Link to="/setup">Setup</Link>
      <Link to="/order">Order</Link>
      <Link to="/random">Random</Link>
      <Link to="/student">Student</Link>
    </div>
  );
}

export default App;
