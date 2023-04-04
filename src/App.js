import React from 'react';
import { connect } from 'react-redux';
import { Routes } from './Routes';

const Page = (props) => {
  return (
    <div>      
      <Routes />
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