import React from 'react';
import { connect } from 'react-redux';

function ActiveCity(props) {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const { name, address, slug } = props.activeCity;

  return (
    <div className="active-city">
      <h3>{ name }</h3>
      <p>{ address }</p>
      <img src={`https://kitt.lewagon.com/placeholder/cities/${slug}`} width="100%" alt="" />
    </div>
  );
}

// this.props.activeCity is now mapped to the redux state subtree 'activeCity'
function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
