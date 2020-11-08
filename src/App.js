import './App.css';
import Home from './containers/Home/Home'
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Error from './containers/Error/Error.js'; 
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
