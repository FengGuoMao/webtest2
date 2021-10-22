import {Component, React} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import Background from '../src/images/u2.jpg';
import Background2 from '../src/images/b2.jpeg';
import Background002 from '../src/images/bj002.jpg';
// import Background001 from '../src/images/bj001.jpeg';
import Background004 from '../src/images/bj004.jpeg';

import {Affix} from "antd";
import './index.css';
import 'antd/dist/antd.css';
import Router from '../src/Header/Router'
import Header from '../src/Header/Header'

import Icon from '@ant-design/icons';

// import ReactEcharts from 'echarts';


class Index extends Component {

    state = {
        hidden: false,
        hidden2: true,
        X: 600,
        Y: 100,
        speed: -10,
demax:false,
    }

    changge = () => {

        this.setState({hidden: true})
        this.setState({hidden2: false})

    }

    handleClick = e => {
        this.setState({hidden2: true})
        this.setState({hidden: false})
    }

    componentDidMount() {


        setInterval(() => {

            this.indexChange()

        }, 100)


    }

    indexChange = () => {
        const {X, speed} = this.state
        if (X < 0) {
            this.setState({speed: 10})
        } else if (X > 1200) {
            this.setState({speed: -10})

        }
        this.setState({X: X + speed})
        this.setState({Y: Math.sqrt(36000 - (X - 500) * (X - 500)) + 500})
    }

    render() {
        const {X, Y} = this.state
        return (
            <div className='img3' style={{
                width: "100%", height: '100%',

            }}>

                <div style={{
                    position: 'absolute',
                    left: X,
                    top: Y,
                    backgroundColor: '#660e0e',
                    width: 100,
                    height: 100
                }}>
                    {/*<img src={Background002}*/}
                    {/*     onMouseOver={this.mOver}*/}
                    {/*     onMouseOut={this.mOut}*/}
                    {/*     className='img2'/>*/}
                </div>

                <div className="container">
                    <div>
                        <Affix offsetTop={1}>
                            <Header
                                // handleClick={this.handleClick}
                                // changge={this.changge}
                            />
                        </Affix>
                    </div>

                    <div>
                        <Router/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
