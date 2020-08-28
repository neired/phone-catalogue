import React, { Component } from 'react';
import axios from 'axios';

// function App() {
//   React.useEffect(() => {
//     getPhones();
//   }, [])
//   function getPhones() {
//     const url = 'http://localhost:3000/api/phones';
//     axios.get(url)
//       .then(res => {

//     })
//   }
// }
class App extends Component {
  state = {
    phones: []
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/phones')
      .then(res => {
        const phones = res.data;
        console.log('res', res);
        this.setState({phones: phones})
        console.log('state', this.state.phones, typeof this.state.phones);
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
        {/* {this.state.phones.map(phone => <li>{phone.name}</li>)} */}
      </ul>
      </>
    )
  }
}

export default App;