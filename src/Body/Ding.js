import React from "react";
import imgX from "../Body/img/02.png"
class Ding extends React.Component{
    render(){
        return(
            <div className="bodypage-divD">
            <ul>
            <li>
                <p>Ant Design Mobile</p>
                <p>GitHub</p>
                <p>发布日志</p>
                <p>Roadmap</p>
                <p>参与贡献</p>
                <p>提问与反馈</p>
                <p>博客</p>
            </li>
            <li>
                <p>Ant Design</p>
                <p>Ant Design - 桌面端组件库</p>
                <p>Ant Design Pro - 中台解决方案</p>
                <p>Ant Motion - 设计动效</p>
                <p>Ant Design Charts</p>
            </li>
            <li>
                <p>更多产品</p>
                <p>ahooks - React Hooks 库</p>
                <p>Dumi - 组件/文档研发工具</p>
                <p>Kitchen - Sketch 工具集</p>
                <p>AntV - 蚂蚁数据可视化方案</p>
                <p>Egg - 企业级 Node Web 开发框架</p>
            </li>
            <li>
                <p>钉钉交流反馈群</p>
                <img height="273px" width="240px" src={imgX} />
            </li>
        </ul>
        <div className="bodypage-divD-div">Open-source MIT Licensed | Copyright © 2016-present Alipay.com | Powered by  <span>dumi</span></div>
        </div>
        )
    }
}
export default Ding