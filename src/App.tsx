import { Routes, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";

import GlobalStyle from "./GlobalStyles";

import Home from "./sections/Home";
import StyledComponents from "./sections/StyledComponents";
import Emotion from "./sections/Emotion";
import TypeScript from "./sections/TypeScript";
import TsForm from "sections/TsForm";
import Coins from "sections/CRYTO_TRACKER";
import Coin from "sections/CRYTO_TRACKER/Detail";

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
  justify-content: space-between;
  align-items: center;

  > h1 {
    > a {
      color: ${({ theme }) => theme.mainColor};
      padding: 1rem;
      font-size: 1.25rem;
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  > li {
    margin-left: 1rem;
    > a {
      color: ${({ theme }) => theme.textColor};
    }
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
            <li>
              <Link to="/tsForm">S4_TypeScriptForm</Link>
            </li>
            <li>
              <Link to="/coins">S5_CRYTO_TRACKER</Link>
            </li>
          </Nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styledComponents" element={<StyledComponents />} />
          <Route path="/emotion" element={<Emotion />} />
          <Route path="/ts" element={<TypeScript />} />
          <Route path="/tsForm" element={<TsForm />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id/*" element={<Coin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
