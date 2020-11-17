import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			ParaShow:false,
			ButtonShow:true
		}

		this.showPara= this.showPara.bind(this);
	};
	
   showPara(){
	   this.setState({
		   ParaShow:true,
		   ButtonShow:false
	   })
   }



    render() {
    	return(
    		<div id="main">
				{this.state.ButtonShow ?(	<button id="click" onClick={this.showPara}>click!</button>):null}
			
				{this.state.ParaShow ? (<p id="para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
</p>):null}
  
    		</div>
    	);
    }
}


export default App;

