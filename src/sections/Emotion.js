import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
  background-color: ${({ background_color }) => background_color};
  animation: ${rotateAnimation} 1s linear infinite;
`;

const Circle = styled(Box)`
  border-radius: 50%;
  animation: none;
`;

const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${({ background_color }) => background_color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
`;

// const TextInput = styled.input.attrs({ required: true, type: "text" })`
//   background-color: #fff;
//   border: 1px solid #ddd;
//   font-size: 1rem;
//   padding: 10px;
//   box-sizing: border-box;
// `;

const Emotion = () => {
  const [x, setX] = useState(false);
  return (
    <>
      <Container>
        <Box background_color="black" />
        <Circle background_color="tomato" />
        <Box background_color="green" />
        <Circle background_color="yellow" />
      </Container>

      <Container>
        <Btn onClick={() => setX(!x)} background_color={x ? "red" : "black"}>
          login
        </Btn>
        <Btn to="/" as={Link} background_color="red">
          Home
        </Btn>
      </Container>

      <Container as="form">{/* <TextInput /> */}</Container>
    </>
  );
};

export default Emotion;
