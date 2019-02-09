import React, { Component } from 'react';
import {connect} from "react-redux";
import {getVoterInfo} from "../actions";
import Autocomplete from 'react-google-autocomplete';
import { Table, Empty, Row, Button, Divider, Tag } from 'antd';


class VoterInfo extends Component {

  infoOutput(){
      if(this.props.output.offices) {
          for(let i = 0; i < this.props.output.offices.length; i++) {
              for(let x = 0; x < this.props.output.offices[i].officialIndices.length; x++) {
                  this.props.output.officials[this.props.output.offices[i].officialIndices[x]].office = this.props.output.offices[i].name;
              }
          }
      }
      const columns = [{
          title: 'Photo',
          dataIndex: 'photoUrl',
          key: 'photoUrl',
          render: photo =>
              (
                  <span>{
                      (photo !== "" ? <img src={photo} width={100}></img> : "")} </span>
              ),
      },  {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
      },  {
          title: 'Office',
          dataIndex: 'office',
          key: 'office',
      },  {
          title: 'Party',
          dataIndex: 'party',
          key: 'party',
      },  {
          title: 'URL',
          dataIndex: 'urls',
          key: 'urls',
      },  {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          render: addresses =>
              (
              <span>{(addresses ? (addresses[0].line1 ? addresses[0].line1 + " " : "") + (addresses[0].line2 ? addresses[0].line2 + " " : "") + (addresses[0].city ? addresses[0].city + " " : "") + (addresses[0].state ? addresses[0].state + " " : "") + (addresses[0].zip ? addresses[0].zip + " " : "") : "")} </span>
          ),
      }];
      if (this.props.output.officials){
          return <Table columns={columns} dataSource={this.props.output.officials} />;
      }
      else {
          return <span style={{textAlign: 'center'}}><br/><h1><i class="fas fa-person-booth fa-5x"></i></h1><h2>Type your address in above to get information about all of your local representatives!</h2></span>;
      }
  }

  render() {
      return <div className="VoterInfo">
          <h1 style={{textAlign: 'center'}}><i class="fas fa-flag-usa"></i>&nbsp;BeanPolitics</h1><h2 style={{textAlign: 'center'}}><i class="fas fa-vote-yea"></i>&nbsp;Civic Information Hub</h2>
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
          <p>{this.infoOutput()}</p>
      </div>;
  }
}

const mapStateToProps = state => {
    return {output: state.voterInfo}
};

export default connect(mapStateToProps, {getVoterInfo})(VoterInfo);
