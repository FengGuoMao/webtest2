import React,{Component} from "react";
import {Button} from "antd";
import "./Header.css"
import Router from './Router';
import {Link} from 'react-router-dom'
import Sider from '../Home/changeImg'


class Header extends Component {

    render() {

        return (

            <div className="xx"  >

                <Button className="but" onClick={this.props.handleClick}>
                    <a href={"/Home/index"}>首页</a>
                </Button>
                <Button className="but"  onClick={this.props.changge}>
                    <a href={"/Home/Amg"}>控件</a>
                </Button>
                <Button className="but" >
                    <a href={"/Home/ch"}>空间</a>
                </Button>
                <Button className="but" >
                    <a href={"/Home/me"}>关于我</a>
                </Button>

            </div>

        )

    }
}
export default Header