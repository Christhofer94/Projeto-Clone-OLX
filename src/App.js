import React from 'react';
import { connect } from 'react-redux';
import { Routes } from './Routes';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import './App.css'

const Page = (props) => {
  return (
    <div> 
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>     
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispath) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);