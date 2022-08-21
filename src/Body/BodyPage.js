import React from "react";
import imgA from "../Body/img/01.png"
import imgB from "../Body/img/02.svg"
import imgC from "../Body/img/03.svg"
import imgD from "../Body/img/04.svg"
import imgE from "../Body/img/05.svg"
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
                            <p>功能特性</p>
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
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        )
    }
}
export default BodyPage