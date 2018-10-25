import React, {Component} from "react";

import "./notfound.css";

class NotFound extends Component{
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
					<p>404</p>
					<p>抱歉,您需要的页面没有找到</p>
				</div>
			</div>
			)
	}
}

export default NotFound;