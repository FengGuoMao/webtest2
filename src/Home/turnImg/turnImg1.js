import React, {Component,} from 'react';
import Background from '../../../src/images/u2.jpg';
import Img1 from '../../../src/images/p1.png';
import Img2 from '../../../src/images/p2.png';
import Img3 from '../../../src/images/p3.png';
import Img4 from '../../../src/images/p4.png';
import Img5 from '../../../src/images/p5.png';
import Background2 from '../../images/b2.jpeg';

import  Table from '../xiaoR'
import Tab from '../Picture3'

import './index.css';
// import styles from './index.css'
import 'antd/dist/antd.css';
import {Button} from "antd";
import Icon from '@ant-design/icons';

class Img extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listImg: [
                Img1,
                Img2,
                Img3,
                Img4,
                Img5,
            ],
            index: 0,
            k: 1,
        }
    }

    //计时器执行
    indexChange() {
        if (this.state.index >= this.state.listImg.length - 1) {
            this.setState({
                index: 0,
                timeout: 2000
            })
        } else if (this.state.k === 1) {
            // this.state.index++;
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    componentDidMount() {
        if (this.state.k === 1) {
            setInterval(() => {
                this.indexChange();
            }, 2000)
        } else {

        }
    }

    //左右点击滑动事件
    Add1 = (value) => {
        const index = this.state.index
        const length = this.state.listImg.length - 1
        if (value === "1") {
            if (index >= length) {
                this.setState({
                    index: 0
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }
        } else if (value === "2") {
            if (index <= 1) {
                this.setState({
                    index: length
                })
            } else {
                this.setState({
                    index: this.state.index - 1
                })
            }
        }

    }
    //鼠标事件 组件上方
    mOver = (obj) => {
        this.setState({k: 2})

    }
    //  //鼠标事件 脱离组件
    mOut = (obj) => {
        this.setState({k: 1})

    }

    render() {

        let {listImg, index} = this.state;

        let imgList = listImg.map((item, imgIndex) => {
            return <div
                style={{'display': index === imgIndex ? 'inline-table' : 'none', float: 'right',marginTop:20}}>

                <div className='card3'>
                    <div className="box3 scale">
                        <div className="fill3">
                            <img src={item} key={imgIndex}
                                 onMouseOver={this.mOver}
                                 onMouseOut={this.mOut}
                                 className='img'/>
                        </div>
                    </div>
                </div>
                {/*<div className="card">*/}
                {/*    <div className="perspective-200">*/}
                {/*            <div className="box rotateY">*/}
                {/*                <div className="fill">  <img src={item} key={imgIndex}*/}
                {/*                                             onMouseOver={this.mOver }*/}
                {/*                                             onMouseOut={this.mOut }*/}
                {/*                                             className='img'/></div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*</div>*/}
            </div>

            // <div
            //     className="trapezium"
            //     style={{ 'display':index === imgIndex ? 'block' : 'none',
            //         width:280, height:250, backgroundColor:'rgba(168,231,186,0.14)', float:'Right'}}>
            //     <img src={item} key={imgIndex}
            //          onMouseOver={this.mOver }
            //          onMouseOut={this.mOut }
            //          className='img'/>
            //     </div>
        })

        // let liList = listImg.map((item2, imgIndex2) => {
        //     return <li
        //         key={imgIndex2}
        //         style={{
        //             'listStyleType': index === imgIndex2 ? 'initial' : 'none',
        //             'display': index === imgIndex2 ? 'block' : 'none',
        //         }}
        //     ></li>
        // })
        return (
            <div>

            <div style={{width: 1200, height: 350, backgroundColor: 'rgba(58,196,34,0.24)'}} >
                <Button
                    onClick={() => this.Add1("2")}
                    style={{width: 20, height: 350, float: "left"}} type={"icon"}>
                    <Icon/>
                </Button>
                <Button
                    onClick={() => this.Add1("1")}
                    style={{width: 20, height: 350, float: "Right"}} type={"icon"}>
                    <Icon/>
                </Button>
                <div style={{marginRight: '10%', marginTop: 1,}}>
                    {imgList}

                </div>
            </div>

                <div>
                    <Tab/>
                </div>
                <div style={{width:1200, height:400, }}>
                {/*    <ul >*/}
                {/*        {liList}*/}
                {/*    </ul>*/}
                {/*</div>*/}


                    <Table/>

            </div>

            </div>
        )

    }
}

export default Img