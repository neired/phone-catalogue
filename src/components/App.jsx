import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/index.scss';
import PhoneCatalogue from './PhoneCatalogue.jsx';
import PhoneDetail from './PhoneDetail.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { connect } from 'react-redux';
import { fetchPhonesBegin, fetchPhonesSuccess, fetchPhonesFailure } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    phones: state.phones
  }
};

class App extends Component {
  state = {
    phones: [],
    loading: true,
    error: null
  }
  componentDidMount() {
    this.props.fetchPhonesBegin();
    axios.get('http://localhost:3000/api/phones')
    .then(res => {
        const phones = JSON.parse(JSON.stringify(res.data.phones));
        this.props.fetchPhonesSuccess({phones});
        this.setState({phones: this.props.phones, loading: this.props.loading})
      })
      .catch(err => {
        this.props.fetchPhonesFailure({error: err.message})
        this.setState({error: this.props.error, loading: this.props.loading});
      })
  }
  render() {
    const { phones, loading, error } = this.state;
    return (
      <>
        <Header/>
        <Switch>
          <Route exact path="/" render={ ()=>{
            return (
              <PhoneCatalogue loading={loading} phones={phones} error={error}/>
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

export default connect(mapStateToProps, { fetchPhonesBegin, fetchPhonesSuccess, fetchPhonesFailure })(App);