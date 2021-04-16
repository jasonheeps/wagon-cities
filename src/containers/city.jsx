import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions/index';

function City(props) {
  const { activeCity, city } = props;
  // why can't I write
  // const { setActiveCity } = props;?

  // clicking on a city makes it the activeCity
  const handleClick = () => {
    if (activeCity !== city) {
      props.setActiveCity(city);
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
