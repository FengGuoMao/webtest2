import React, {Component, } from 'react';
import '../../index2.css';
import 'antd/dist/antd.css';
import Img1 from '../.././images/p1.png'

class Amg extends Component{

    render() {

        return(


            <div className="card">
            <div className="perspective-200">
            <div className="card">
                <div className="box rotateY">
                    <div className="fill">  <img src={Img1}
                                                 onMouseOver={this.mOver }
                                                 onMouseOut={this.mOut }
                                                 className='img'/></div>
                </div>
            </div>
        </div>


            </div>
        )
    }
}
export default Amg