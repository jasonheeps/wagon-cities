import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { setActiveCity } from '../actions';

function City(props) {
  const { city } = props.city;
  const activeCity = props.activeCity;

  // clicking on a city makes it the activeCity
  const handleClick = () => {
    if (activeCity !== city) {
      setActiveCity(city);
    }
  };

  const className = `city${activeCity === city ? '' : ' active-city'}`;

  return (
    <div className={className} onClick={handleClick}>
      <h3>{ city.name }</h3>
    </div>
  );
}

// this.props.activeCity is now mapped to the redux state subtree 'activeCity'
function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

// this.props.setActiveCity is now available in the container City
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
