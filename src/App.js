import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FirstPerson } from './components';
import './index.css';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={FirstPerson} exact />
        <Route path="/first-person" component={FirstPerson} exact />
      </Switch>
    </>
  </BrowserRouter>
);
export default App;
