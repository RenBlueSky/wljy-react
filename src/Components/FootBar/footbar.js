import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./footbar.css";

class FootBar extends Component{
	constructor(){
		super();
		this.state = {
			footicon:[]
		}
	}

	componentDidMount(){
		this.setState({
			footicon:[
				{id:0,src:'',name:"首页"},
				{id:1,src:'',name:"每日发现"},
				{id:2,src:'',name:"我的"}
			]
		})
	}

	render(){
		return (
			<div className="Foot_box">
				<div className="foot_items">
				{/*
					this.state.footicon.map(item=>{
						return(
							<div className="foot_item" key={item.id}>
								<a href="#" className="itemlink">
									<div className="item_box">
										<div className="img_box">
											<img src="" />
										</div>
										<div className="item_name">{item.name}</div>
									</div>
								</a>
							</div>
						)
					})
				*/}
					<div className="foot_item">
						<div className="itemlink">
							<Link to="/home">
								<div className="item_box">
									<div className="img_box">
										<img src="" />
									</div>
									<div className="item_name">首页</div>
								</div>
							</Link>
						</div>
					</div>

					<div className="foot_item">
						<div className="itemlink">
							<Link to="/find">
								<div className="item_box">
									<div className="img_box">
										<img src="" />
									</div>
									<div className="item_name">每日发现</div>
								</div>
							</Link>
						</div>
					</div>

					<div className="foot_item">
						<div className="itemlink">
							<Link to="/my">
								<div className="item_box">
									<div className="img_box">
										<img src="" />
									</div>
									<div className="item_name">我的</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FootBar;