import React, {Component} from "react";
import FootBar from "../FootBar/footbar";
import "./my.css";

class My extends Component{
	constructor(){
		super();
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return (
			<div>
				<div className="News_box">
					foot我的页面
				</div>
				<FootBar/>
			</div>
			)
	}
}

export default My;