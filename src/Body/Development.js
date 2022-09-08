import React from "react";
import imgF from "../Body/img/06.svg"
import imgG from "../Body/img/07.svg"
class Development extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Symbol: ">"
        }
    }
    render() {
        return (
            <>
                <div>开发资源</div>
                        <ul>
                            <li>
                                <span className="bodypage-div-ul-li-spanA">在线体验</span><span className="bodypage-div-ul-li-spanB">开始体验</span>
                                <p>在 Codesandbox 上在线体验，无需安装和配置环境</p>
                                <img src={imgF} />
                            </li>
                            <li>
                                <span className="bodypage-div-ul-li-spanA">组件列表</span><span className="bodypage-div-ul-li-spanB">查看全部</span>
                                <p>基于蚂蚁集团的众多业务实践，抽象构建出移动端资产库</p>
                                <img src={imgG} />
                            </li>
                        </ul>
            </>
        )
    }
}
export default Development