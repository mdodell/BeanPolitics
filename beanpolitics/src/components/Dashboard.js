import React, {Component} from 'react';
import{Button} from "antd";
import './Global.css';
import CongressPic from "../images/Congress.jpg";

class Dashboard extends Component {
    render(){
        return (

           <div>
           <div className="BackgroundMain">
               <img src={CongressPic} className="BackgroundImage" alt="ErrorInBackgroundImg"></img>
           </div>
           <div className="Title">
               <p className="TitleMain"><i className="fas fa-flag-usa"></i>&nbsp;BeanPolitics</p>
               <p className="TitleSubText"><i>A fun, educational, and information-rich hub app for all things politics!</i></p>
           </div>
           <main>
               <div className="MainMargins">
                   <div className="trapezoid3">
                       <div className="trapezoid4">
                           <p className="TrapLetters1"><i>Made at HackBeanpot!</i></p>
                       </div>
                   </div>
               </div>
               <div className="wave">
               </div>
               <div className="ContentContainer">
               <div className="ContentBox">
                   <div className="InnerImage InnerImageSpec1" onClick={function(){window.location.href='/voterInfo'}}>
                       <div className="InnerTitleTxt">
                           <h1 className="emphasis">Civic Info Hub</h1>
                       </div>
                   </div>
                   <div className="InnerDes">
                       <h2 className="emphasis">
                           Want to find out who represents you? Use the Civic Info Hub to become informed on your local representatives and how to contact them!
                       </h2>
                   </div>
               </div>
               <div className="ContentBox">
                   <div className="InnerImage InnerImageSpec2" onClick={function() {window.location.href='/covfefe'}}>
                       <div className="InnerTitleTxt">
                           <h1 className="emphasis">Covfefe.io</h1>
                       </div>
                   </div>
                   <div className="InnerDes">
                       <h2 className="emphasis">
                           A fun, informative game where users determine whether or not articles that appear are "Fake News". Try your luck at Covfefe.io!
                       </h2>
                   </div>
               </div>
               <div className="ContentBox">
                   <div className="InnerImage InnerImageSpec3">
                       <div className="InnerTitleTxt">
                           <h1 className="emphasis">Data Archive</h1>
                       </div>
                   </div>
                   <div className="InnerDes">
                       <h2 className="emphasis">
                           Curious about past election results? Access the Data Archive to see visualizations of your state's presidential and Senate elections!
                       </h2>
                   </div>
               </div>
               </div>
           </main>
           </div>

        )
    }
}

export default Dashboard;