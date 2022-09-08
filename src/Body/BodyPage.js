import React from "react";
import imgA from "../Body/img/01.png"
import './index.css'
import Button from "./Button";
import FeatSpecial from "./FeatSpecial";
import Development from "./Development";
import Guide from "./Guide";
import Ding from "./Ding";
import Use from "./Use";
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
                                <Button />
                            </div>
                        </div>
                    </div>
                    <span className="bodypage-spanB"><img width="820px" height="577px" src={imgA} /></span>
                </div>
                <div className="bodypage-div--div-A">

                    <div>
                        <FeatSpecial />
                    </div>
                </div>
                <div className="bodypage-div-ulB">
                    <div className="bodypage-div-ulB-div">
                        <Development />
                    </div>
                </div>
                <Guide />
                <div>
                    <Use />
                </div>
                <div >
                    <Ding />

                </div>
            </div>
        )
    }
}
export default BodyPage