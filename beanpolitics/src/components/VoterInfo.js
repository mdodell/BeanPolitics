import React, { Component } from 'react';
import {connect} from "react-redux";
import {getVoterInfo} from "../actions";
import Autocomplete from 'react-google-autocomplete';
import { Icon, Card} from 'antd';
import { TextSubHeader, ArticleTitle, VoterInfoBackground } from "./styled-components";
const { Meta} = Card;


class VoterInfo extends Component {


    getCover(index){
        if (this.props.output.officials[index].photoUrl === undefined || this.props.output.officials[index].photoUrl === ""){
            return "";
        }
        else {
            return this.props.output.officials[index].photoUrl;
        }

    }

    getPhone(index) {
        return "tel:" + this.props.output.officials[index].phones;
    }

    getGoogleMaps(index) {
        return "https://www.google.com/maps/place/" + (this.props.output.officials[index].address ? (this.props.output.officials[index].address[0].line1 ? this.props.output.officials[index].address[0].line1 + " " : "") + (this.props.output.officials[index].address[0].line2 ? this.props.output.officials[index].address[0].line2 + " " : "") + (this.props.output.officials[index].address[0].city ? this.props.output.officials[index].address[0].city + " " : "") + (this.props.output.officials[index].address[0].state ? this.props.output.officials[index].address[0].state + " " : "") + (this.props.output.officials[index].address[0].zip ? this.props.output.officials[index].address[0].zip + " " : "") : "")
    }


    getChannels(index) {
        if (this.props.output.officials[index]) {
            if (this.props.output.officials[index].channels) {
                console.log(this.props.output.officials[index].channels);
                const output = <span>{this.props.output.officials[index].channels.map((channel, ind) => {
                    if (channel.type === "YouTube") {
                        const link = "http://youtube.com/user/" + channel.id;
                        return <span><i className="fab fa-youtube"></i>&nbsp;YouTube: <a href={link}>{channel.id}</a><br/></span>
                    }
                    else if (channel.type === "Twitter") {
                        const link = "http://twitter.com/" + channel.id;
                        return <span><i className="fab fa-twitter-square"></i>&nbsp;Twitter: <a href={link}>{channel.id}</a><br/></span>
                    }

                    else if (channel.type === "Facebook") {
                        const link = "http://facebook.com/" + channel.id;
                        return <span><i className="fab fa-facebook-square"></i>&nbsp;Facebook: <a href={link}>{channel.id}</a><br/></span>
                    }
                })}</span>;
                return output;
            }
        }
    }


    getDescription(index){
        return <div><span>{this.props.output.officials[index].office}</span><br/>
        <span>{this.props.output.officials[index].party}</span><br/>
        <span>{this.getChannels(index)}</span><br/>
        </div>
    }

    infoOutput(){
      if(this.props.output.offices) {
          for(let i = 0; i < this.props.output.offices.length; i++) {
              for(let x = 0; x < this.props.output.offices[i].officialIndices.length; x++) {
                  this.props.output.officials[this.props.output.offices[i].officialIndices[x]].office = this.props.output.offices[i].name;
              }
          }
      }
      if (this.props.output.officials){
          return <div>
              {this.props.output.officials.map((official, index) => (
                  <Card style={{width: '25%', textAlign: 'center'}} cover={<img alt="" src={this.getCover(index)} />} actions={[<a href={official.urls}><Icon type="link" /></a>, <a href={this.getPhone(index)}><Icon type="phone" /></a>,<a href={this.getGoogleMaps(index)}><Icon type="compass"/></a>]}><Meta
                  title={official.name}
                  description={this.getDescription(index)}
              />
                  </Card>
          ))}
          </div>;
      }
      else {
          return <span style={{textAlign: 'center'}}><br/><br/><ArticleTitle><i class="fas fa-person-booth fa-5x"></i></ArticleTitle><ArticleTitle>Type in your address above to get information about all of your local representatives!</ArticleTitle></span>;
      }
  }

  render() {
      return <div className="VoterInfo">
          <VoterInfoBackground>
              <TextSubHeader><i class="fas fa-flag-usa"></i>&nbsp;BeanPolitics</TextSubHeader><ArticleTitle><i class="fas fa-vote-yea"></i>&nbsp;Civic Information Hub</ArticleTitle>
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
          {this.infoOutput()}
          </VoterInfoBackground>
      </div>;
  }
}

const mapStateToProps = state => {
    return {output: state.voterInfo}
};

export default connect(mapStateToProps, {getVoterInfo})(VoterInfo);
