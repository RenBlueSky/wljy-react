import React, {Component} from "react";
import { Router, Route} from "react-router";
import App from "../../App";
import NoticeTest from "../NoticeTest/noticetest";
import RoadShow from "../RoadShow/roadshow";
import NewsDetail from "../News/NewsDetail/newsdetail";

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

class RouteMap extends Component{
	
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={App}/>
				</Switch>
			</BrowserRouter>
			)
	}
}

export default RouteMap;