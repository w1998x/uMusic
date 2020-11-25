import React from 'react'
//引入一级路由
import Index from './pages/index'
import Play from './pages/paly'
import List from './pages/list'
//引入路由
import {Switch,Route,Redirect} from 'react-router-dom'
//创建组件方式一之函数创建
function App(){
    return (<div>
        <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/play" component={Play}></Route>
        <Route path="/list" component={List}></Route>
        <Redirect to="/index"></Redirect>
        </Switch>
    </div>)
}

//导出这个函数
export default App