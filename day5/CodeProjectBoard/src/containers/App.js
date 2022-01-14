import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board';
import Tickets from './Tickets';
import Header from '../components/Header/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

//Hook is the ability to imitate the class 
//component by functional component

function MyComp(props) {
  return (
    <div>
      Hai
    </div>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f: ''
    }
  }
  render() {
    const lanes = [
      { id: 1, title: 'To Do' },
      { id: 2, title: 'In Progress' },
      { id: 3, title: 'Review' },
      { id: 4, title: 'Done' },
    ];

    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board
            lanes={lanes}
            dataSource={'../../assets/data.json'}
          />
          <Tickets
            dataSource={'../../assets/data.json'}
          />
        </AppWrapper>
      </>
    );
  }
}

export default App;
