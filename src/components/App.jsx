import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/index.scss';
import PhoneCatalogue from './PhoneCatalogue.jsx';
import PhoneDetail from './PhoneDetail.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import store from '../store/store';

class App extends Component {
  state = {
    phones: [],
    loading: true,
    error: null
  }
  componentDidMount() {
    const state = store.getState();
    console.log('1', state);
    axios.get('http://localhost:3000/api/phones')
      .then(res => {
        const phones = JSON.parse(JSON.stringify(res.data.phones));
        this.setState({phones: phones, loading: false})
      })
      .catch(err => {
        this.setState({error: err});
        console.log(this.state.error);
      })
  }
  render() {
    const { phones, loading } = this.state;
    return (
      <>
        <Header/>
        <Switch>
          <Route exact path="/" render={ ()=>{
            return (
              <PhoneCatalogue loading={loading} phones={phones} />
            );
          }} />
          <Route path="/phone-detail/:phoneId" render={routerProps => {
            return (
              <PhoneDetail 
                routerProps={routerProps}
                phones={phones}
                loading={loading}
              />
            );
          }}/>
        </Switch>
        <Footer/>
      </>
    )
  }
}

export default App;