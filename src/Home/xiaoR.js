import  { React , Component} from "react";

import '../index.css';
import {Button, Tooltip} from "antd";


class Title extends Component {
    state = {
        data1: 1,
        hidden: true,
        text: "你打我啊"
    }
    mOver = (obj) => {
        const m = document.getElementById("button2")
        m.innerHTML = "你打我啊"

    }
    mOut = (obj) => {
        obj.innerHTML = "Mouse Over Me"
        const m = document.getElementById("button2")
        m.innerHTML = "你快回来"
        this.setState({text: "你快回来"})
    }
    handleClick = e => {
        const m = document.getElementById("button2")
        m.innerHTML = "你打不着"
        this.setState({hidden: false, text: "你打不着"})
    };
    dema = () => {
        const data1 = this.state.data1
        if (data1 === 1) {
            const X = document.getElementById("button1")
            X.innerHTML = "遇到你了";
            X.style.width = "300px";
        } else if (data1 === -1) {
            const X = document.getElementById("button2")
            X.innerHTML = "又遇到我了";
            X.style.width = "200px";
        }
        this.setState({data1: data1 * -1})
    }


    render() {

        return (
            <div id="mouses" className="mouses" style={{backgroundColor: 'rgba(255,255,255,0.1)',}}>
                < div style={{padding: 80, height: 200}}>
                    <Tooltip
                        placement={"topLeft"}
                        defaultVisible={true} id={"tooltip"} title={this.state.text}
                        style={{marginLeft: 10, marginTop: 10}}>
                        <div id="mumu" className="mumu"
                             onClick={this.handleClick}
                             onMouseOver={this.mOver}
                             onMouseOut={this.mOut}
                             style={{float: "right"}}
                        > </div>
                    </Tooltip>
                    <Tooltip
                        placement={"topLeft"}
                        defaultVisible={true} id={"tooltip"} title={this.state.text}
                        style={{marginLeft: 10, marginTop: 10}}>
                        <div id="mumu2" className="mumu2"
                             onClick={this.handleClick}
                             onMouseOver={this.mOver}
                             onMouseOut={this.mOut}
                        > </div>
                    </Tooltip>
                </div>
                <div>
                    <Button id={"button1"} onClick={this.dema}>
                        遇到我了</Button>
                    < Button id={"button2"} onClick={this.handleClick}
                             onMouseOver={this.mOver}
                             onMouseOut={this.mOut}
                             style={{float: "Right", width: 200, height: 40, hidden: this.hidden}}
                    >
                    </Button>
                    {/*<div style={{height: 320, marginTop: 70}}>*/}
                    {/*    /!*<ReactEcharts {...props}/>*!/*/}
                    {/*</div>*/}
                </div>
            </div>

        )
    }
}
export default Title