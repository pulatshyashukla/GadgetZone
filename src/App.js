import "./App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Localstores from "./components/Localstores";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/brands">
              <Brands />
            </Route>
            <Route exact path="/localstores">
              <Localstores />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
