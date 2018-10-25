import React, {Component} from "react";

import "./options.css";

class Options extends Component{
	constructor(){
		super();
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
				<div className="Options_box">
					<div className="option_link">
						<div className="img_box">
							<img src={this.props.optionsrc} alt="" />
						</div>
						<div className="option_name">{this.props.children}</div>
					</div>
				</div>
			)
	}
}

export default Options;