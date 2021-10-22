//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件
import Home from '../src/Home/changeImg';
import About from '../src/index';
//引入一些模块
import { BrowserRouter as Router, Route} from "react-router-dom";

function router(){
    return (
        <Router>
            <Route path="../src/Home/changeImg" component={Home} />
            <Route path="../src/index" component={About} />
        </Router>);
}

export default router;