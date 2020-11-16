import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};


renderpara =()=>{
	    document.getElementById(paraf).innerText=this.props.children
}


    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={this.renderpara}>render para</button>
				 <p id="paraf"></p>
    		</div>
    	);
    }
}


export default App;

