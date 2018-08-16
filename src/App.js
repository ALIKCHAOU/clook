import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props)
  {super(props);
    this.state={

    second:(new Date().getHours()*3600)+(new Date().getMinutes()*60)+new Date().getSeconds()};
  setInterval( ()=> {this.setState({ second: this.state.second+1})}, 1000);

}
affiche=(string)=>{


}
  
 
  

  
  transfert=(timeforma)=>{
    var time={
      heure:Math.floor(timeforma/3600),
      minute: Math.floor(timeforma/60%60),
      second: Math.floor(timeforma%60),
     
    }
    /*padStart(2,"0")*/
    return (time.heure).toString().padStart(2,"0")+' : '+(time.minute).toString().padStart(2,"0")+' : '+(time.second).toString().padStart(2,"0") ;
    
  }
  

  render() {
    return (
      <div className="App">
      <span>time is second :</span>
       <span>{this.state.second}</span><br/>
       <span> the time  is :</span><br/>
       <span className="timestate">{this.transfert(this.state.second)}</span><br/>
       <span className="time">hour</span>  <span className="time">minute</span> <span className="time">second</span> 
      </div>
     
    );
   
  }


}


export default App;
