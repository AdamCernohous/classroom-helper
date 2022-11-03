import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Classroom Helper!</h1>
      <p>Skvěle...už jste dokázal spustit tuto aplikaci.</p>
      <p>Ovšem teď budete potřebovat více, než jen <strong>npm start</strong></p>
      <p>Aby vám fungovala většina funkcí aplikace tak budete muset spustit <strong>json-server</strong>.</p>
      <p> Hodně štěstí! (otevřete si nové okno terminálu a vložte do něj následující příkaz)</p>
      <p><strong>npx json-server --watch data/db.json --port 4000</strong></p>
      <Link to="/setup">Setup</Link>
      <Link to="/order">Order</Link>
      <Link to="/random">Random</Link>
      <Link to="/student">Student</Link>
      <div>
        <form>
          <input type="number" />
          <input type="number" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
