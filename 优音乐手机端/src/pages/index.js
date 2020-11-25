import React from 'react'
//引入样式
import '../assets/css/index.css'
//引入二级路由
import Recommend from '../views/Home/home'
import Rank from '../views/Rank/rank'
import Search from '../views/Search/search'
//引入路由文件
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <div className="index">
                <div className="header">
                    <div className="title">
                        <img src="../assets/images/logo.png"/>
                        <h1>优音乐</h1>
                        <div className="downLoad">
                            下载App
                    </div>
                    </div>
                    <div className="navBar">
                        <NavLink activeClassName="active" to="/index/recommend">
                            <span>推荐音乐</span>
                        </NavLink>
                        <NavLink activeClassName="active" to="/index/rank">
                            <span>排行榜</span>
                        </NavLink>
                        <NavLink activeClassName="active" to="/index/search">
                            <span>搜索</span>
                        </NavLink>
                    </div>
                </div>
                <Switch>
                    <Route path="/index/recommend" component={Recommend}></Route>
                    <Route path="/index/rank" component={Rank}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    <Redirect to="/index/recommend"></Redirect>
                </Switch>
            </div>
        )
    }
}

export default Home