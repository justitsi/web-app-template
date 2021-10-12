import styles from './App.module.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from './content/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
