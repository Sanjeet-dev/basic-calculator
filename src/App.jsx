import "./index.css";
import { useEffect, useState } from "react";
function App() {
  const [data,setData]=useState("");
  function handleChange(e){
    setData(e.target.value);
    console.log(data);
  }
  function handleClick(e){
    setData(data+e.target.value);
    // console.log(e.target)
  }
  function handleEqual(){
    setData(eval(data));
  }
  const handleKeyDown = (event) => {
    if(event.key==="Enter"){
      let maindata=data;
    setData("");
     setData(eval(maindata)) 
    }
  };
  useEffect(() => {

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [data]);
  return (
    <>
      <main>
        <div className="container">
          <div className="display">
          <input type="text" className="calculator-screen" value={data} onChange={(e)=>handleChange(e)} placeholder="0"/>
          </div>
          <div className="buttons">
            <div className="calculator-keys">

              <div className="row">
                <button value="C" onClick={()=>setData("")}>C</button>
                <button value="+/-">+/-</button>
                <button value="%" onClick={(e) => handleClick(e)} >%</button>
                <button className="operator" value="/" onClick={(e) => handleClick(e)}  >&divide;</button>
              </div>
              <div className="row">
                <button value="7" onClick={(e) => handleClick(e)} >7</button>
                <button value="8" onClick={(e) => handleClick(e)} >8</button>
                <button value="9" onClick={(e) => handleClick(e)} >9</button>
                <button className="operator" value="*" onClick={(e) => handleClick(e)}  >&times;</button>
              </div>
              <div className="row">
                <button value="4" onClick={(e) => handleClick(e)} >4</button>
                <button value="5" onClick={(e) => handleClick(e)} >5</button>
                <button value="6" onClick={(e) => handleClick(e)} >6</button>
                <button className="operator" value="-" onClick={(e) => handleClick(e)}  >-</button>
              </div>
              <div className="row">
                <button value="1" onClick={(e) => handleClick(e)} >1</button>
                <button value="2" onClick={(e) => handleClick(e)} >2</button>
                <button value="3" onClick={(e) => handleClick(e)} >3</button>
                <button className="operator" value="+" onClick={(e) => handleClick(e)}  >+</button>
              </div>
              <div className="last-row">
                <button value="0" onClick={(e) => handleClick(e)} >0</button>
                <button className="decimal" value="." onClick={(e) => handleClick(e)} >.</button>
                <button className="operator" value="=" onClick={handleEqual}>=</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </> 
  );
}

export default App;
