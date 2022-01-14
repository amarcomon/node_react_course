// import logo from "./logo.svg";
import "./App.css";
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const myStyle = { backgroundColor: "red", color: "white" };
    return (
      <div>
        <h1 style={myStyle}>Hello world</h1>
        <br />
        <ExampleComp />
      </div>
    );
  }
}

const ExampleComp = (props) => {
  return (
    <div>
      <h2>Example of component</h2>
    </div>
  );
};

export default App;
