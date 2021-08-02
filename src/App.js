import React, { Component } from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
