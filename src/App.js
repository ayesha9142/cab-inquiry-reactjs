import Home from "./Home";
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Form" component={Form} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
