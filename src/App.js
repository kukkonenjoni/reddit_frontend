import { useRecoilState } from 'recoil';
import { isLogged } from './Recoil/globalState'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import axios from 'axios';

export default function App() {
  const [LoggedInUser, setLoggedInUser] = useRecoilState(isLogged)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setLoggedInUser({token: token})
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      axios.post("http://localhost:5000/api/token", {}, config)
        .then((res) => {
          setLoggedInUser({user: res.data.name, token: token})
          console.log(res)})
    }
  }, [])

  return (
    <Router>
      <NavigationBar />
        <Switch>
          <Route exact path="/about">
            <h1>test</h1>
          </Route>
          <Route exact path="/about">
            <h1>test</h1>
          </Route>
          <Route exact path="/">
            <h1>test</h1>
          </Route>
        </Switch>
    </Router>
  );
}