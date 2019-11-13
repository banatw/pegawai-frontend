import React from "react";
import { SERVER_URL } from "../constants";

class Pegawailist extends React.Component {
  constructor() {
    super();
    this.state = { pegawais: [] };
  }

  fetchData = () => {
    //console.log(SERVER_URL);
    fetch(SERVER_URL + "api/pegawais")
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          pegawais: responseData._embedded.pegawais
        });
      });
    //.catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    const tableRows = this.state.pegawais.map((pegawai, index) => (
      <tr key={pegawai.id}>
        <td>{pegawai.nama}</td>
        <td>{pegawai.alamat}</td>
      </tr>
    ));
    return (
      <div className="App">
        <table>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Pegawailist;
