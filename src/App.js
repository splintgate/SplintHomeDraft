import './App.css';
import Content from './component/content/content';
import Header from './component/head/header';
import Footer from './component/footer';
import 'tachyons';
import React, {useRef} from 'react';
import Footer2 from './component/Footer2/footer2';
import CTA from './component/cta/cta';
import Blog from './containers/blog/blog';

function App() {
  const svc= useRef();
  const cnct= useRef();
  const blog =useRef();

  const moveToSvc=()=>{
    svc.current?.scrollIntoView({behavior: 'smooth'});
  }

  const moveToCnct=()=>{
    cnct.current?.scrollIntoView({behavior: 'smooth'});
  }

  const moveToBlog=()=>{
    blog.current?.scrollIntoView({behavior: 'smooth'});
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <Header moveToSvc={moveToSvc} moveToCnct={moveToCnct} moveToBlog={moveToBlog}/>
        <Content svc={svc} moveToCnct={moveToCnct}/>
        <CTA moveToCnct={moveToCnct}/>
        <Blog blog={blog}/>
        <Footer cnct={cnct}/>
        <Footer2/>
      </header>
    </div>
  );
}

export default App;
