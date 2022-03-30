import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyles";

import Home from "./sections/Home";
import StyledComponents from "./sections/StyledComponents";

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
          </Nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styledComponents" element={<StyledComponents />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
