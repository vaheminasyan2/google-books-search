import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import Search from "./components/Search/search"
import Main from "./components/Main/main";
import Row from "./components/Row/row";
import Card from "./components/Card/card";
import Footer from "./components/Footer/footer";
//import books from "";

class App extends Component {
  // Setting this.state.books to the books return from Google Books API
  // state = {
  //   books,
  // }

  render() {
    return (

      <Main>
        <Navbar />
        <Title />
        <Main>
          <Row>
            <Search />
          </Row>
          <Row> Results
            <Card />
          </Row>
        </Main>
        <Footer />
      </Main>

    );
  }
}

export default App;
