import React from "react";
import imgF from "../Body/img/06.svg"
import imgG from "../Body/img/07.svg"
class Experience extends React.Component {
    render() {
        return (
            <>
                <ul>
                    <li>
                        <span className="bodypage-div-ul-li-spanA">在线体验</span><span className="bodypage-div-ul-li-spanB">开始体验</span>
                        <p>在 Codesandbox 上在线体验，无需安装和配置环境</p>
                        <img src={imgF} />
                    </li>
                </ul>
            </>
        )
    }
}
export default Experience