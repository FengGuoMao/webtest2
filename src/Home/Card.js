import React, {Component } from "react";
import {Card, Statistic, Tooltip} from "antd";
import Icon from "@ant-design/icons";

class zuj extends Component {
    state = {
        width: '10%',
        height: '200px',
    }

    zujian = (data1, data2) => {
        const length = data1.length
        const width2 = Math.round((100 - length) / length) + '%'
        const list2 = ["titleR1", "titleR2", "titleR4", "titleR5", "titleR1"]
        let imgList = []
        console.log("length", data1.length)

        for (let i = 0; i < length; i++) {
            imgList.push(
                <div style={{
                    float: 'left', height: this.state.height, width: width2, marginRight: '1%'
                }}>
                    <div className={list2[i]}>
                        <span className="span" style={{marginLeft: '30%'}}> {data1[i]}</span>
                        <Tooltip title="prompt text" style={{marginLeft: 10, marginTop: 10}}>
                            <Icon type="question-circle" style={{marginLeft: 10, marginTop: 12, color: '#fff'}}/>
                        </Tooltip>
                    </div>
                    <Card className="titleC1" styles={{height: '80px', fontsize: '20px',}}>
                        <Statistic style={{textAlign: 'center'}} value={data2[i]} className="font-right"
                                   suffix={[<span>? </span>]}>
                        </Statistic>
                    </Card>
                </div>
            )
        }
        return imgList


    }

    render() {

        const list1 = ["抬头0", '抬头1', '抬头2', '抬头3', '抬头4']
        const list2 = ["数据0", '数据1', '数据2', '数据3', '数据4']

        return (
            <div style={{background: 'rgba(179,238,163,0.09)'}}>
                <div className="content" style={{height: '50px', backgroundColor: '#fff', marginTop: '10px'}}>
                    <div className="blue-logeD">
                        <h3 className="title-sec" style={{height: '40px'}}>
                            <button className="blue-logeB"/>
                            数据总览
                        </h3>
                    </div>
                </div>
                <div style={{height: 140, padding: '0px 20px 0px 40px', marginTop: '10px'}}>
                    {this.zujian(list1, list2)}
                </div>
            </div>
        );
    }
}
export default zuj