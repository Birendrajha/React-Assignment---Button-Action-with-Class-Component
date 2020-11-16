import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			parag: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
		}
	};
	

renderpara =()=>{
	    document.getElementById(para).innerText=this.state.parag;
}


    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={this.renderpara}>render para</button>
				<p id="para"></p>
    		</div>
    	);
    }
}


export default App;

