import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/index.scss';
import PhoneCatalogue from './PhoneCatalogue.jsx';
import PhoneDetail from './PhoneDetail.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import store from '../store/store';
import { connect } from 'react-redux';
import { STORE_DATA } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    phones: state.phones
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (phones, loading, error) => dispatch({type: STORE_DATA, phones, error})
  }
}

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
        this.props.storeData({phones: phones, loading: true, error: null});
        console.log('2', state);
        // this.props.storeData({
        //   phones: phones, loading: false
        // })
        this.setState({phones: phones, loading: false})
      })
      .catch(err => {
        // this.props.storeData({
        //   loading: false, error: err
        // })
        this.setState({error: err, loading: false});
        console.log(this.state.error);
        // handleError({ error, history: this.props.history }); YA ANALIZAREMOS ESTO CON DETALLE
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;