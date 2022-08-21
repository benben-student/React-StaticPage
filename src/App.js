import React,{Fragment} from 'react';
import './App.css';
import BodyPage from './Body/BodyPage';
import SwitchLanguage from './Header/SwitchLanguage';
function App() {
  return (
    <Fragment>
      <SwitchLanguage/>
      <BodyPage/>
    </Fragment>
  );
}
export default App;
