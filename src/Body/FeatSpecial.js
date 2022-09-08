import React from "react";
import imgB from "../Body/img/02.svg"
import imgC from "../Body/img/03.svg"
import imgD from "../Body/img/04.svg"
import imgE from "../Body/img/05.svg"
class FeatSpecial extends React.Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}
export default FeatSpecial