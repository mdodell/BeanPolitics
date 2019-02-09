import React, { Component } from 'react';
import {connect} from "react-redux";
import {getVoterInfo} from "../actions";
import Autocomplete from 'react-google-autocomplete';


class VoterInfo extends Component {

  infoOutput(){
      return JSON.stringify(this.props.output);
  }

  render() {
    return <div className="VoterInfo">
        <h1>Voter Info:</h1>
        <Autocomplete
            style={{width: '100%'}}
            onPlaceSelected={(place) => {
                if(place.formatted_address){
                    this.props.getVoterInfo(place.formatted_address);
                }
                else{
                    this.props.getVoterInfo(place.name);
                }
            }}
            types={[]}
            componentRestrictions={{country: "us"}}
        />
        <p>{this.infoOutput().toString()}</p>
    </div>;
  }
}

const mapStateToProps = state => {
    return {output: state.voterInfo}
};

export default connect(mapStateToProps, {getVoterInfo})(VoterInfo);
