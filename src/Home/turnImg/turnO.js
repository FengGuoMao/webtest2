import React, {Component, } from 'react';
import '../../index2.css';
import 'antd/dist/antd.css';
import Img1 from '../.././images/p1.png'


class Amg extends Component{
state={
    hidden:true,
}
    changge = ()=>{
this.setState({hidden:~this.state.hidden})
    }
    render() {


        return(

            <div className="card"  >
                <div className="box rotate">
                    <div className="fill"> </div>
                </div>
                <p>rotate(45deg) </p>

        <div className="card">
            <div className="box rotateX">
                <div className="fill"></div>
            </div>
            <p>rotateX(45deg)</p>
        </div>
        <div className="card">
            <div className="box rotateY">
                <div className="fill"></div>
            </div>
            <p>rotateY(45deg)</p>
        </div>
        <div className="card">
            <div className="box rotateZ">
                <div className="fill"></div>
            </div>
            <p>rotateZ(45deg) </p>
        </div>

        <div className="card">
            <div className="box scale">
                <div className="fill">
                    <img src={Img1}
                         onMouseOver={this.mOver }
                         onMouseOut={this.mOut }
                         className='img'/>
                </div>
            </div>
            <p>scale(2)</p>
        </div>
        <div className="card">
            <div className="box scaleX">
                <div className="fill"> </div>
            </div>
            <p>scaleX(2) </p>
        </div>
        <div className="card">
            <div className="box scaleY">
                <div className="fill"></div>
            </div>
            <p>scaleY(2) </p>
        </div>

        <div className="card">
            <div className="box skew">
                <div className="fill"></div>
            </div>
            <p>skew(45deg, 45deg) </p>
        </div>
        <div className="card">
            <div className="box skewX">
                <div className="fill"></div>
            </div>
            <p>skewX(45deg)</p>
        </div>
        <div className="card">
            <div className="box skewY">
                <div className="fill"></div>
            </div>
            <p>skewY(45deg)</p>
        </div>

        <div className="card">
            <div className="box translate">
                <div className="fill"></div>
            </div>
            <p>translate(45px) </p>
        </div>
        <div className="card">
            <div className="box translateX">
                <div className="fill"></div>
            </div>
            <p>translateX(45px)</p>
        </div>
        <div className="card">
            <div className="box translateY">
                <div className="fill"></div>
            </div>
            <p>translateY(45px)</p>
        </div>
        <div className="card">
            <div className="box matrix">
                <div className="fill"></div>
            </div>
            <p> matrix(2, 2, 0, 2, 45, 0)</p>
        </div>
        <h4>Perspective : 100</h4>
        <div className="perspective-100">
            <div className="card">
                <div className="box rotateX">
                    <div className="fill"> </div>
                </div>
                <p>rotateX(90deg)</p>
            </div>
            <div className="card">
                <div className="box rotateY">
                    <div className="fill">  <img src={Img1}
                                                 onMouseOver={this.mOver }
                                                 onMouseOut={this.mOut }
                                                 className='img'/>
                    </div>
                </div>
                <p>rotateY(45deg)</p>
            </div>
        </div>
        <h4>Perspective : 200</h4>
        <div className="perspective-200">
            <div className="card">
                <div className="box rotateX">
                    <div className="fill"></div>
                </div>
                <p>rotateX(90deg)</p>
            </div>
            <div className="card">
                <div className="box rotateY">
                    <div className="fill"></div>
                </div>
                <p>rotateY(45deg)</p>
            </div>
        </div>

        <h2>Transform origin</h2>
        <div className="card">
            <div className="box rotate">
                <div className="fill to-100-0-0"></div>
            </div>
            <p>transform-origin : 100% 0 0 <br/>rotate(45deg)</p>
        </div>
        <div className="card">
            <div className="box rotate">
                <div className="fill to-0-100-0"></div>
            </div>
            <p>transform-origin : 0 100% 0<br/>rotate(45deg)</p>
        </div>
        <div className="card perspective-200">
            <div className="box rotateX">
                <div className="fill to-0-100-0"></div>
            </div>
            <p>transform-origin : 0 100% 0<br/>rotateX(45deg)</p>
        </div>
        <div className="card perspective-200">
            <div className="box rotateX">
                <div className="fill to-100-0-0"></div>
            </div>
            <p>transform-origin : 100% 0 0<br/>rotateX(45deg)</p>
        </div>
        <div className="card perspective-200">
            <div className="box rotateY">
                <div className="fill to-0-100-0"></div>
            </div>
            <p>transform-origin : 0 100% 0 <br/>rotateY(45deg)</p>
        </div>
        <div className="card perspective-200">
            <div className="box rotateY">
                <div className="fill to-100-0-0"></div>
            </div>
            <p>transform-origin : 100% 0 0<br/>rotateY(45deg)</p>
        </div>
        <div className="card">
            <div className="box scale">
                <div className="fill to-100-0-0"></div>
            </div>
            <p>transform-origin : 100% 0 0<br/>scale(2)</p>
        </div>
        <div className="card">
            <div className="box scale">
                <div className="fill to-0-100-0"></div>
            </div>
            <p>transform-origin : 0 100% 0<br/>scale(2)</p>
        </div>
        <div className="card">
            <div className="box scaleX">
                <div className="fill to-100-0-0"></div>
            </div>
            <p>transform-origin : 100% 0 0<br/>scaleX(2)</p>
        </div>
        <div className="card">
            <div className="box scaleX">
                <div className="fill to-0-100-0"></div>
            </div>
            <p>transform-origin : 0 100% 0<br/>scaleX(2)</p>
        </div>
        <div className="card">
            <div className="box scaleY">
                <div className="fill to-100-0-0"></div>
            </div>
            <p>transform-origin : 100% 0 0<br/>scaleY(2)</p>
        </div>
        <div className="card">
            <div className="box scaleY">
                <div className="fill to-0-100-0"></div>
            </div>
            <p>transform-origin : 0 100% 0<br/>scaleY(2)</p>
        </div>

            </div>


    )
    }
}
export default Amg