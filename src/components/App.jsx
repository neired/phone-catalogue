import React, { Component } from 'react';
import axios from 'axios';

// function App() {
//   React.useEffect(() => {
//     getPhones();
//   }, [])
//   async function getPhones() {
//     const url = 'http://localhost:3000/api/phones';
//     const response = await axios.get(url)
//     console.log(response.data)
//   }
// }
class App extends Component {
  state = {
    phones: []
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/phones')
      .then(res => {
        const phones = JSON.parse(JSON.stringify(res.data.phones));
        this.setState({phones: phones})
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <>
        <h1>Phone Catalogue</h1>
        <ul>
          {this.state.phones.map((phone, i) => <li id={i} key={phone.id}>{phone.name}</li>)}
        </ul>
      </>
    )
  }
}

export default App;