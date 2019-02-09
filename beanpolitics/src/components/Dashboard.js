import React, {Component} from 'react';
import{Button} from "antd";
import './Global.css';
import CongressPic from "../images/whiteHouse.jpg";

class Dashboard extends Component {
    render(){
        return (

           <body>
           <div className="BackgroundMain">
               <img src={CongressPic} className="BackgroundImage" alt="ErrorInBackgroundImg"></img>
           </div>
           <div className="Title">
               <p className="TitleMain">Bean Politics</p>
               <p className="TitleSubText"><i>sub header</i></p>
           </div>
           <main>
               <div className="MainMargins">
                   <div className="trapezoid3">
                       <div className="trapezoid4">
                           <p className="TrapLetters1"><i>Let's Begin</i></p>
                       </div>
                   </div>
               </div>
               <div className="wave">
               </div>
               <div className="ContentContainer">
               <div className="ContentBox">
                   <div className="InnerImage InnerImageSpec1">
                       <div className="InnerTitleTxt">
                           <p>Voter Info</p>
                       </div>
                   </div>
                   <div className="InnerDes">
                       <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore magna
                           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                           ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit
                           esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                           occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum.
                       </p>
                   </div>
               </div>
               <div className="ContentBox">
                   <div className="InnerImage InnerImageSpec1">
                       <div className="InnerTitleTxt">
                           <p>Covfefe</p>
                       </div>
                   </div>
                   <div className="InnerDes">
                       <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore magna
                           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                           ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit
                           esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                           occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum.
                       </p>
                   </div>
               </div>
               <div className="ContentBox">
                   <div className="InnerImage InnerImageSpec3">
                       <div className="InnerTitleTxt">
                           <p>Data Archive</p>
                       </div>
                   </div>
                   <div className="InnerDes">
                       <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore magna
                           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                           ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit
                           esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                           occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum.
                       </p>
                   </div>
               </div>
               </div>
           </main>
           </body>

        )
    }
}

export default Dashboard;