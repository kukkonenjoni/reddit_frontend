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
import Main from './components/Main';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import Subredditcontainer from './components/Subredditcontainer'
import Commentscontainer from './components/Commentscontainer';

export default function App() {

  const queryClient = new QueryClient();

  const [LoggedInUser, setLoggedInUser] = useRecoilState(isLogged)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setLoggedInUser({token: token})
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      axios.post("http://localhost:5000/api/verifytoken", {}, config)
        .then((res) => {
          setLoggedInUser({user: res.data.name, token: token})
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
          setLoggedInUser("")
          localStorage.removeItem("token")
        })
    }
  }, [])

  return (
    <Router>
      <NavigationBar />
      <QueryClientProvider client={queryClient}>
          <Switch>
          <Route exact path="/r/:subreddit/comments/:post">
              <Commentscontainer />
            </Route>
            <Route exact path="/r/:subreddit">
              <Subredditcontainer />
            </Route>
            <Route exact path="/">
                <Main />
            </Route>
          </Switch>
        </QueryClientProvider>
    </Router>
  );
}