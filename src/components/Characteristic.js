import React from "react";
import imgB from "../Body/img/02.svg"
class Characteristic extends React.Component {
    render() {
        return (
            <div className="div">
                <li>
                    <img src={imgB} />
                    <div><p>高性能</p></div>
                    <p>无需配置，即可拥有最佳的包体积大小和最优的性能</p>
                </li>
            </div>
        )
    }
}
export default Characteristic