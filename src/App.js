
import './App.css';
import { Vehicallist } from './Vehicallist';
import { Link, Switch, Route } from 'react-router-dom';
import { Addvehical } from './Addvehical';
import { Vechicaldetails } from './Vechicaldetails';
import { Editvechical } from './Editvechical';


function App() {
  return (
    <div className="App">
      <nav className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vechicals">Vechicals</Link></li>
          <li><Link to="/addvechical">Add Vechical</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vechicals">

          <Vehicallist />

        </Route>
        <Route exact path="/vechicals/:id">
          <Vechicaldetails />
        </Route>
        <Route path="/vechicals/edit/:id">
          <Editvechical />
        </Route>
        <Route path="/addvechical">
          <Addvehical />
        </Route>
        <Route path="/**">
          <Notfound />
        </Route>

      </Switch>


    </div>
  );
}
function Home() {
  return (
    <div className="home">
      <h1>HYUNDAI CARS</h1>
      <img src="https://cdn.worldvectorlogo.com/logos/hyundai-motor-company-2.svg" alt="hyundai" />
      <h3>ABOUT COMPANY</h3>
      <p>Gurugram, November 08, 2021 — Hyundai Motor India Limited (HMIL), country’s first smart mobility solutions provider and largest exporter since inception, today introduced its new brand campaign ‘Beyond Mobility’ that encapsulates the company’s commitment and aspirations for the India of tomorrow. Drawing its inspiration from Hyundai’s Global Vision of ‘Progress for Humanity’, the ‘Beyond Mobility’ campaign has been pegged on three pillars of Intelligent Technology, Sustainability and Innovation. </p>
    </div>
  )
}

function Notfound() {
  return (
    <div className="notfound">
      <img src="https://lh5.googleusercontent.com/proxy/HqNXitJgBNhVPckrtEpfERRRr6xfen-fyra7vcCQu2ggo9UGqkRmtv33ztNwcCRKhgAqKp0g6j6q=s0-d" alt="notfound" />
    </div>
  )
}

export default App;

