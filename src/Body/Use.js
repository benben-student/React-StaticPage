import React from "react";
import imgJ from "../Body/img/10.svg"
import imgK from "../Body/img/11.svg"
import imgL from "../Body/img/12.svg"
import imgM from "../Body/img/13.svg"
import imgN from "../Body/img/14.svg"
import imgO from "../Body/img/15.svg"
import imgP from "../Body/img/16.svg"
import imgW from "../Body/img/17.svg"
class Use extends React.Component {
    render() {
        return (
            <div className="bodypage-divA">
                <div className="bodypage-divA-div">谁在使用</div>
                <div className="bodypage-divB-div">
                    <span><img src={imgJ} /></span>
                    <span><img src={imgK} /></span>
                    <span><img src={imgL} /></span>
                    <span><img src={imgM} /></span>
                    <span><img src={imgN} /></span>
                    <span><img src={imgO} /></span>
                    <span className="bodypage-divB-div-span"><img src={imgP} /></span>
                    <span><img src={imgW} /></span>
                </div>
            </div>
        )
    }
}
export default Use