
import './App.css';
import styled from 'styled-components';
import SideBar from './SideBar';
import MainSection from './MainSection';
import React from 'react';

const primary = "#29c0f5";
const secondary = "blue";
const accent = "#f6f8fa";
const black = "#494d66";
const grey = "grey";

const MainApp = styled.div`
  background: ${props => props.bg};
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;


`

export const lightTheme = {
  "primary": primary,
  "secondary": secondary,
  "accent": accent,
  "black": black,
  "grey": grey,
}
// const darkTheme = {
//   "primary": "#red",
//   "secondary": "#1ac2f2",
//   "accent": "#f6f8fa",
// }

function App() {

  return (
    <MainApp className="app" bg={lightTheme.accent} >
      <SideBar bGround={lightTheme.primary} />

      <MainSection bGround={lightTheme.accent} />

    </MainApp>
  );
}

export default App;
