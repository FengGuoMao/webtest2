//引入react jsx写法的必须
import React from 'react';

//引入一些模块
import {BrowserRouter as Router, Route} from "react-router-dom";
//引入需要用到的页面组件

import changeImg from '../Home/changeImg';
import Amg  from '../Home/turnImg/turnO'
import index2 from  '../Home/turnImg/turnImg1'

function router(){
    return (
        <Router>
            <Route path="/Home/ch" component={changeImg} />
            <Route path="/Home/index" component={index2} />
            <Route path="/Home/Amg" component={Amg} />

        </Router>);
}

export default router;