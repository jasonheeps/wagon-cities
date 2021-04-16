import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import { setCities } from '../actions/index';
// this works too:
// import { setCities } from '../actions';

function CityList(props) {
  // useEffect() gets called when CityList gets rendered
  // it replaces componentDidMount, componentDidUpdate and componentWillUnmount
  // see https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    // why can't I just use 'setCities()' from the import?
    // (I guess because the import itself isn't properly wired with the reducer?)
    // Why do I need this? I thought I already have 'this.props.cities' thanks to mapStateToProps()
    // console.log('useEffect() in CityList called!!!');
    props.setCities();
  });

  const renderList = () => {
    // when do I know when to still use the 'old' props (like here 'city')?
    return props.cities.map(
      city => (
        <City
          city={city}
          key={city.name}
        />
      )
    );
  };

  return (
    <div className="cities">
      { renderList() }
    </div>
  );
}

// this.props.cities is now mapped to the redux state subtree 'flats'
function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

// this.props.setCities is now available in the container CityList
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
// export default connect(mapStateToProps)(CityList);
