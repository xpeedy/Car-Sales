import React from 'react';
import { connect } from 'react-redux';
import { carList } from '../reducers/reducer';
import { addAdditionalFeature } from "../actions/index"

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addAdditionalFeature(props.feature.id)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps,{addAdditionalFeature})(AdditionalFeature);
