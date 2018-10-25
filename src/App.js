import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import NoticeTest from "./Components/NoticeTest/noticetest";
import RoadShow from "./Components/RoadShow/roadshow";
import NewsDetail from "./Components/News/NewsDetail/newsdetail";
import Mall from "./Components/Mall/mall";
import Test from "./Components/Test/test";
import Find from "./Components/Find/find";
import My from "./Components/My/my";
import NotFound from "./Components/NotFound/notfound";

const isLogin = false;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<Switch>
      		<Route path="/" exact component={Home}/>
      		<Route path="/home" exact component={Home}/>
      		<Route path="/noticetest" exact component={NoticeTest}/>
      		<Route path="/roadshow" exact component={RoadShow}/>
      		<Route path="/newsdetail/:id" exact component={NewsDetail}/>
      		<Route path="/test" exact component={Test}/>
      		<Route path="/mall" exact component={Mall}/>
      		<Route path="/find" exact component={Find}/>
      		<Route path="/my" exact component={My}/>
      		<Route exact component={NotFound}/>
      	</Switch>
      </BrowserRouter>
    );
  }
}

export default App;
