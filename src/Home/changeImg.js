import {Component, React} from "react";
import Swiper from "swiper";
import {Button} from "antd";
import styles from '../index.css';
import styles2 from '../index2.css';
import Background from '../../src/images/u2.jpg';
import {
    addVivsit, getDefaultWeek,
    getDefaultWeekF,
    getSubOrgF,
    getTypes,
} from './service' ;

import 'swiper/css/swiper.css';


class Index2 extends Component {
    state = {
        hidden: false,

    }
    componentDidMount() {

        this.instanceSwiper()

    }
    instanceSwiper() {

        this.swiperObj = new Swiper('.swiper-container', {

            slidesPerView: 1,

            loop: false,

            autoplay: {// 自动滑动

                delay: 3000, //3秒切换一次

                // stopOnLastSlide: false,

                disableOnInteraction: false,//

            },

            observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要

            observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要

        })

    }

    componentDidUpdate() {

        this.swiperObj.update();

        this.swiperObj.slideTo(0, 1000, false);

    }

    componentWillReceiveProps = (nextProps) => {

        const { list: oldList } = this.props

        const { list: newList } = nextProps

        if (oldList != newList) {

            this.swiperObj.destroy();

            this.swiperObj = null;

            this.instanceSwiper()

        }

    }

    componentWillUnmount() {

        if (this.swiperObj.destroy) { // 销毁swiper

            this.swiperObj.destroy();

            this.swiperObj = null;
        }
    }
    handleClick = e => {

        this.setState({hidden: ~this.state.hidden})
    }
    render() {
        const { list} = this.props
        return (
            <div style={{backgroundColor: '#f5f5f5'}}>
                <div hidden={this.state.hidden}>
                    <h1 style={{textAline: "cneter"}}>准备开始！！</h1>
                    <Button onClick={this.handleClick}>
                        开始游戏
                    </Button>
                </div>
                <div hidden={~this.state.hidden} style={{backgroundColor: '#f5f5f5'}}>
                </div>
                <div  className={styles.swiperFather} style={{backgroundColor:'rgba(122,250,54,0)', height:200}}>

                    {/* /swiper-no-swiping关闭鼠标滑动  ${styles.con}设置轮播组件的宽高*/}

                    <div className={`swiper-container swiper-no-swiping ${styles.con}`} style={{ overflow: 'hidden' }}>

                        <div className={`swiper-wrapper ${styles.con}`}>

                            {
                                list && list.length > 0 && list.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={`swiper${index}`}>
                                            <div style={{ backgroundImage: `url(${Background})`,}}>

                                            </div>
                                        </div>
                                    )
                                })
                            }
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
                                    <div className="fill"> </div>
                                </div>
                                <p>rotateY(45deg)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index2