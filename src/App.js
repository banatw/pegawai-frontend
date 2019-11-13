import React from "react";
import Pegawailist from "./components/Pegawailist";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pegawai List</h1>
          <Pegawailist className="tes"></Pegawailist>
        </header>
      </div>
    );
  }
}

export default App;
