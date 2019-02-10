import React, { Component } from 'react';
import {connect} from "react-redux";
import {getVoterInfo} from "../actions";
import Autocomplete from 'react-google-autocomplete';
import { Tabs, Icon, Card} from 'antd';
import { TextSubHeader, ArticleTitle, VoterInfoBackground } from "./styled-components";
import placeholder from '../images/placeholder.png';
const { Meta} = Card;


function callback(key) {
    console.log(key);
}

class VoterInfo extends Component {


    getStateData(){
        console.log(this.props.output.normalizedInput);
        if(this.props.output.normalizedInput){
            const image = "../" + this.props.output.normalizedInput.state + ".jpg";
            const label = "2016 Election Results in " + this.props.output.normalizedInput.state;
            return <div style={{textAlign: 'center'}}><ArticleTitle>{label}</ArticleTitle><br/><img alt={label} src={image}/></div>
        }
        else{
            return <div></div>
        }
    }

    getCover(index){
        if (this.props.output.officials[index].photoUrl === undefined || this.props.output.officials[index].photoUrl === "" || this.props.output.officials[index].photoUrl === ("http://www.mass.gov/governor/images/governor-charlie-baker-300x450.jpg") || this.props.output.officials[index].photoUrl === ("http://www.mass.gov/governor/images/ltgovernor-karyn-polito-300x450-.jpg")){
            return placeholder;
        }
        else {
            let img = new Image();
            img.onerror = function(){
                console.log(img);
                img.src = placeholder;
            };
            img.src = this.props.output.officials[index].photoUrl;
            return img.src;
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
                const output = <span>{this.props.output.officials[index].channels.map((channel, ind) => {
                    if (channel.type === "YouTube") {
                        const link = "http://youtube.com/user/" + channel.id;
                        return <span><i className="fab fa-youtube"></i>&nbsp;YouTube: <a href={link}>{channel.id}</a><br/></span>
                    } else if (channel.type === "Twitter") {
                        const link = "http://twitter.com/" + channel.id;
                        return <span><i className="fab fa-twitter-square"></i>&nbsp;Twitter: <a href={link}>{channel.id}</a><br/></span>
                    } else {
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
        const TabPane = Tabs.TabPane;
        if(this.props.output.offices) {
            for(let i = 0; i < this.props.output.offices.length; i++) {
                for(let x = 0; x < this.props.output.offices[i].officialIndices.length; x++) {
                    this.props.output.officials[this.props.output.offices[i].officialIndices[x]].office = this.props.output.offices[i].name;
                }
            }
        }
        if (this.props.output.officials){
            return <span style={{textAlign: 'center'}}><Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab={<span style={{color: 'white'}}>Representatives</span>} key="1"><ArticleTitle>Your Elected Officials</ArticleTitle><br/>
                    <div style={{display: 'flex', flexWrap: 'wrap', WebkitFlexWrap: 'wrap'}}><br/>
                {this.props.output.officials.map((official, index) => (
                    <Card style={{width: '50%', textAlign: 'center', display: 'block'}} cover={<img alt="" src={this.getCover(index)} style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}/>} actions={[<a href={official.urls}><Icon type="link" /></a>, <a href={this.getPhone(index)}><Icon type="phone" /></a>,<a href={this.getGoogleMaps(index)}><Icon type="compass"/></a>]}><Meta
                        title={official.name}
                        description={this.getDescription(index)}
                    />
                    </Card>
                ))}
                    </div></TabPane><TabPane tab={<span style={{color: 'white'}}>2016 Election Results</span>} key="2">{this.getStateData()}</TabPane>
            </Tabs></span>;
        }
        else {
            return <span style={{textAlign: 'center'}}><br/><br/><ArticleTitle><i className="fas fa-person-booth fa-5x"></i></ArticleTitle><ArticleTitle>Type in your address above to get information about all of your local representatives as well as your state's 2016 election visualization!</ArticleTitle></span>;
        }
    }

    render() {
        return <div className="VoterInfo">
            <VoterInfoBackground>
                <TextSubHeader><i className="fas fa-flag-usa"></i>&nbsp;BeanPolitics</TextSubHeader><ArticleTitle><i className="fas fa-vote-yea"></i>&nbsp;Civic Information Hub & Data Archive</ArticleTitle>
                <div style={{textAlign: 'center'}}>
                    <br/>
                    <Autocomplete
                        style={{width: '60%', borderRadius: '1vh'}}
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
                    <br/>
                </div>
                {this.infoOutput()}
            </VoterInfoBackground>
        </div>;
    }
}

const mapStateToProps = state => {
    return {output: state.voterInfo}
};

export default connect(mapStateToProps, {getVoterInfo})(VoterInfo);
