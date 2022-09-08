import React from "react";
import imgH from "../Body/img/08.svg"
import imgI from "../Body/img/09.svg"
class Guide extends React.Component{
    render(){
        return(
            <div >
        <div className="bodypage-div-ulC">
            <div className="bodypage-div-ulC-div">
                <div className="bodypage-div-ulC-div-div">新手指引</div>
                <ul>
                    <li className="bodypage-div-ulC-ul">
                        <li>
                            <span >快速上手</span>
                            <p>轻松两步，快速实现安装和引入组件，Ant Design Mobile 自动加载 CSS 样式文件</p>
                            <div >查看详情</div>
                        </li>
                        <img src={imgH} />
                    </li>
                    <li className="bodypage-div-ulC-ul">
                        <li>
                            <span >常见问题</span>
                            <p>我们为你整理了一些常见的问题，遇到疑问不妨先来查阅一下</p>
                            <div >FAQ</div>
                        </li>
                        <img src={imgI} />
                    </li>
                </ul>
            </div>
        </div>
    </div>
        )
    }
}
export default Guide