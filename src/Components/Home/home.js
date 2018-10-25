import React, {Component} from "react";
import {Link} from "react-router-dom";
import $ from "jquery";
import Carousel from "../Carousel/carousel";
import Options from "../Options/options";
import FootBar from "../FootBar/footbar";
import NewsList from "../News/NewsList/newslist";


import "./home.css";

class Home extends Component{
	constructor(){
		super();
		this.state = {
			opsrc:[]
		}
	}

	componentDidMount(){
		this.setState({
			opsrc:[
				"https://www.baidu.com/img/bd_logo1.png"	
			]
		})
	}

	render(){
		return (
			<div style={{height:$(window).height() - 60,overflow:'hidden'}}>
				<div className="Home_box">
					<Carousel></Carousel>
					<Link to="/noticetest">
						<div className="notice_box">
							<span className="notice_headline">公告头条</span>
							<span className="notice_ceshi">未来教育测试版</span>
						</div>
					</Link>
					<div className="line"></div>

					<div className="Options_box">
						<ul className="options_ul">
							<li className="options_li">
								<Link to="/roadshow">
									<Options optionsrc={this.state.opsrc[0]}>路演</Options>
								</Link>
							</li>
							<li className="options_li">
								<Link to="/test">
									<Options optionsrc={this.state.opsrc[0]}>测试</Options>
								</Link>
							</li>
							<li className="options_li">
								<Link to="/mall">
									<Options optionsrc={this.state.opsrc[0]}>商城</Options>
								</Link>
							</li>
							<li className="options_li">
								<Link to="/test">
									<Options optionsrc={this.state.opsrc[0]}>课堂</Options>
								</Link>
							</li>
							<li className="options_li">
								<Link to='/test'>
									<Options optionsrc={this.state.opsrc[0]}>答疑解惑</Options>
								</Link>
							</li>
							<li className="options_li">
								<Link to="/mall">
									<Options optionsrc={this.state.opsrc[0]}>商城</Options>
								</Link>
							</li>
						</ul>
					</div>

					<NewsList/>
					<FootBar/>
				</div>
			</div>
			)
	}
}

export default Home;