import React, { Children } from "react";
import Button from "./Button";
import './style.css'
import Characteristic from "./Characteristic";
import Experience from "./Experience";
class App extends React.Component {
    render() {
        return (
            <div>
                <Button className="antdm-btn">开始使用</Button>
                <Button btnType="primary">组件列表</Button>
                <Characteristic />
                <Experience/>
            </div>
        )
    }
}
export default App