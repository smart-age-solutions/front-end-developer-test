import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

function App() {
  const [current, setCurret] = useState(2);

  const alvo = 3;


    const next = () => {
      setCurret(current === alvo - 1 ? 0 : current + 1);
    }
    const prev = () => {
      setCurret(current === 0 ? alvo - 1 : current - 1);
    }

  
  return (
    <App_sec className="App">
     <h1 onClick={() => setCurret(0)}>Hello world!</h1>
     <div className="btn-box">
        <div className="btn-left" onClick={prev}>left</div>
        <div className="btn-right" onClick={next}>right</div>
     </div>

     <div id="app">
        <div id="elm1" className={current === 0 ? 'ativo' : 'desativo'}>Slide 1 length: {current}</div>
        <div id="elm2" className={current === 1 ? 'ativo' : 'desativo'}>Slide 2</div>
        <div id="elm3" className={current === 2 ? 'ativo' : 'desativo'}>Slide 3</div>
     </div>
    </App_sec>
  );
}

const App_sec = styled.div`
    .btn-box{
      display:flex;
      justify-content:space-between;
      align-items:center;
      width: 200px;
      height:40px;
      margin:auto;
      margin-bottom:100px;
    }
    .btn-left{
      padding: 20px;
      border-radius: 50px;
      font-weight:bold;
      text-transform:uppercase;
      background:deepskyblue;
      cursor: pointer;
    }
    .btn-right{
      padding: 20px;
      border-radius: 50px;
      font-weight:bold;
      text-transform:uppercase;
      background:deepskyblue;
      cursor: pointer;
    }
    
    #app{
      display:flex;
      background: green;
      justify-content:space-evenly;
      align-items:center;
      /* width:100%;
      height:200px; */
    }

    #elm1{
        display:flex;
        justify-content:center;
        align-items:center;
        font-weight:bold;
        font-size:20px;
        background:crimson;
    }
    #elm2{
        display:flex;
        justify-content:center;
        align-items:center;
        font-weight:bold;
        font-size:20px;
        background:deepskyblue;
    }
    #elm3{
        display:flex;
        justify-content:center;
        align-items:center;
        font-weight:bold;
        font-size:20px;
        background:deeppink;
    }

    .desativo{
        width: 200px;
        height: 200px;
    }

    .ativo{
        position:absolute;
        width: 300px;
        height: 300px;
        transition: 0.5s;
        /* transform: scale(1.08); */
    }

    @media (max-width:415px){
      
      #app{
        overflow-x: auto;

      }
      
    }


    
`

export default App;
