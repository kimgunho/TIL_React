import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyles";

import Home from "./sections/Home";
import StyledComponents from "./sections/StyledComponents";
import Emotion from "./sections/Emotion";
import TypeScript from './sections/TypeScript';

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  > li {
    margin-left: 1rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <Nav>
            <li>
              <Link to="/styledComponents">S1_styledComponents</Link>
            </li>
            <li>
              <Link to="/emotion">S2_emotion</Link>
            </li>
            <li>
              <Link to="/ts">S3_TypeScript</Link>
            </li>
          </Nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styledComponents" element={<StyledComponents />} />
          <Route path="/emotion" element={<Emotion />} />
          <Route path="/ts" element={<TypeScript />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
