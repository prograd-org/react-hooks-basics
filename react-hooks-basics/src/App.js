import React,{ useState,useEffect, useContext } from "react";

import "./App.css";
function Sample(props) {
  let [state, setState] = useState({ age: 21, count: 1 });

  let addAge = () => {
    setState({
      ...state,
      age: state.age + 1,
    });
  };
  let addCount = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  };


  // Progression 4: INITIALIZE STATE FROM FUNCTION
  let [cnt, setCnt] = useState(0);
  let addCnt = () => {
    setCnt(cnt + 1);
  };
  let subCnt = () => {
    setCnt(cnt - 1);
  };
  let resetCnt = () => {
    setCnt(0);
  };

  // Progrssion 5: USE EFFECT
  const [age, setAge] = useState(21);
  let addAge2 = () => {
    setAge(age + 1);
  }
  useEffect(() => {
    document.title = `You are ${age} years old`;
  })

  // Progression 6: useContext
  return (
    <>
      <h1>Today I'm {state.age} Years of Age</h1>
      <h1>I have {state.count} siblings</h1>
      <button id="first" onClick={addAge}>
        Get Older!
      </button>
      <br />
      <br />
      <button id="first" onClick={addCount}>
        More Sibling
      </button>
      <br />
      <br />
      {/* Progression 4: INITIALIZE STATE FROM FUNCTION */}
      <div>
        <h1>Count: {cnt}</h1>
        <button id="first" onClick={addCnt}>
          +
        </button>

        <button id="first" onClick={subCnt}>
          -
        </button>

        <button id="first" onClick={resetCnt}>
          Reset
        </button>
        <br />
        <br />
      </div>

      {/* Progression 5: USE EFFECT */}
      <div>
        <h1>Look at the title of the current tab in your browser</h1>
        <button id="first" onClick={addAge2}>
          Update Title!
        </button>
        <br />
        <br />
      </div>

      
    </>
  );
}


function SixthComponent() {
  const ThemeContext = React.createContext("light");
  const Display = () => {
    const theme = useContext(ThemeContext);
    return (
      <>
        <div
          style={{
            background: theme === "dark" ? "black" : "lightyellow",
            color: theme === "dark" ? "white" : "rgb(90, 89, 89)",
            width: "100%",
            minHeight: "200px",
          }}
          
        >
          {"The theme here is " + theme}
        </div>
      </>
    );
  };
  return (
    <>
      <Display />
    </>
  );
}

export { Sample, SixthComponent };
