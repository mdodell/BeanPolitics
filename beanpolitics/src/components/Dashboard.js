import React, {Component} from 'react';
import{Button} from "antd";
import './Global.css';

class Dashboard extends Component {
    render(){
        return (
            <html>
           <body>
           <div className="Title">
               <p className="TitleMain">Bean Politics</p>
               <p1 className="TitleSubText"><i>sub header</i></p1>
           </div>
           <main className="MainMargins">
               <div className="trapezoid3">
                   <div className="trapezoid4">
                       <p className="TrapLetters1"><i>Let's Begin</i></p>
                   </div>
               </div>
               <div>
                   <p>Voter Info</p>
               </div>
               <div>
                   <p>Covfefe</p>
               </div>
               <div>
                   <p>Data Archive</p>
               </div>




           </main>
           </body>
            </html>
        )
    }
}

export default Dashboard;