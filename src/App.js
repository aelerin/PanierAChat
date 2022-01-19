import './App.css';
import './Assets/Styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Composants/Home';
import NavigationBar from './Composants/Navigationbar';
import Panier from './Composants/Panier';
import Cards from './Composants/Cards';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" }
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI()
  }

render() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Admin" element={<Cards />} />
        </Routes>
    <div>{this.state.apiResponse}</div>
      </div >
    </BrowserRouter>
  );
}}

export default App;
