import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}
// switch를 넣은 이유는 한번에 하나의 route만 render 하기 위함

export default App;