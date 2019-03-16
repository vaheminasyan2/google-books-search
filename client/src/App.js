import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Error from "./pages/Error"
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";

//import books from "";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Main>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Error} />
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
