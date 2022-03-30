import { useState } from "react";
import styled from "@emotion/styled";
import { keyframes, jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;

const rotateAnimation = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
    }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  animation: ${rotateAnimation} 1s linear infinite;
`;

const Circle = styled(Box)`
  border-radius: 50%;
  animation: none;
`;

const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
`;

const pinkInput = css`
  background-color: pink;
`;
const RedPasswordInput = (props) => (
  <input
    type="password"
    css={css`
      background-color: red;
      display: block;
    `}
    {...props}
  />
);

const TextInput = styled.input`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
`;

const Main = () => {
  const [x, setX] = useState(false);
  return (
    <>
      <Container>
        <RedPasswordInput css={pinkInput} />
        <TextInput required type="password" />
        <Box bgColor="black" />
        <Circle bgColor="tomato" />
        <Box bgColor="green" />
        <Circle bgColor="yellow" />
      </Container>

      <Container>
        <Btn onClick={() => setX(!x)} bg={x ? "red" : "black"}>
          login
        </Btn>
        <Btn to="/" as={Link} bg="blue">
          Home
        </Btn>
      </Container>

      <Container as="form"></Container>
    </>
  );
};

export default Main;
