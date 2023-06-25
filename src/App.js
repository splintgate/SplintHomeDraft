import './App.css';
import Content from './component/content/content';
import Header from './component/head/header';
import Footer from './component/footer';
import 'tachyons';
import React, {useRef} from 'react';

function App() {
  const svc= useRef();
  const cnct= useRef();

  const moveToSvc=()=>{
    svc.current?.scrollIntoView({behavior: 'smooth'});
  }

  const moveToCnct=()=>{
    cnct.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header moveToSvc={moveToSvc} moveToCnct={moveToCnct}/>
        <Content svc={svc} moveToCnct={moveToCnct}/>
        <Footer cnct={cnct} />
      </header>
    </div>
  );
}

export default App;
