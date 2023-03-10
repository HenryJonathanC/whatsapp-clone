import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
