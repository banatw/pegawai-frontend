import React from "react";
import { SERVER_URL } from "../constants";
import ReactTable from "react-table";
import 'react-table/react-table.css';

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

  hapus = (link) => {
    fetch(link,{method : "DELETE"})
    .then(response => this.fetchData());
  }

  render() {
    const columns = [{Header:"Nama",accessor: "nama"},
    {Header:"Alamat",accessor: "alamat"},
  {id:"delButton",accessor : "_links.self.href",Cell: ({value})=><button onClick={()=>this.hapus(value)}>Hapus</button> }]
    return (
      <div>
        <ReactTable data={this.state.pegawais} columns={columns} filterable={true}></ReactTable>
      </div>
    )
  }
}

export default Pegawailist;
