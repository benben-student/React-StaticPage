import React from "react";
import imgA from "../Body/img/01.png"
import imgB from "../Body/img/02.svg"
import imgC from "../Body/img/03.svg"
import imgD from "../Body/img/04.svg"
import imgE from "../Body/img/05.svg"
import imgF from "../Body/img/06.svg"
import imgG from "../Body/img/07.svg"
import imgH from "../Body/img/08.svg"
import imgI from "../Body/img/09.svg"
import './index.css'
class BodyPage extends React.Component {
    render() {
        return (
            <div className="bodypage">
                <div>
                    <div className="bodypage-div-div">
                        <div>
                            <div className="bodypage-span-div-pA"><p>Ant Design Mobile</p></div>
                            <div><p className="bodypage-span-div-pB">探索移动端 Web 的体验极限</p></div>
                            <div className="bodypage-span-div-button">
                                <button className="bodypage-span-div-button-buttonA">开始使用</button>
                                <button className="bodypage-span-div-button-buttonB">组件列表</button>
                            </div>
                        </div>
                    </div>
                    <span className="bodypage-spanB"><img width="820px" height="577px" src={imgA} /></span>
                </div>
                <div className="bodypage-div--div-A">

                    <div>
                        <ul>
                            <p className="bodypage-div-ul-p">功能特性</p>
                            <li>
                                <img src={imgB} />
                                <div><p>高性能</p></div>
                                <p>无需配置，即可拥有最佳的包体积大小和最优的性能</p>
                            </li>
                            <li>
                                <img src={imgC} />

                                <div> <p>可定制</p></div>
                                <p>基于 CSS 变量，可以灵活地调整组件外观或自由创造自己的主题</p>
                            </li>
                            <li>
                                <img src={imgD} />

                                <div><p>原子化</p></div>
                                <p>每个组件提供的功能，恰到好处地满足业务所需</p>
                            </li>
                            <li>
                                <img src={imgE} />

                                <div> <p>流畅</p></div>
                                <p>拥有流畅的手势交互和细致的动画展示，助力打造极致体验</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bodypage-div-ulB">
                    <div className="bodypage-div-ulB-div">
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
                    </div>
                </div>
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
                <div>5</div>
                <div>6</div>
            </div>
        )
    }
}
export default BodyPage