import { Link } from "react-router-dom";
import styled from "@emotion/styled";

interface CircleProps {
  bg: string;
  border?: boolean;
  text?: string;
}

const CircleEle = styled("div")<CircleProps>`
  background-color: ${({ bg }) => bg};
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${({ border }) => (border ? `border:10px solid red` : false)}
`;

const Circle = ({ bg, border, text = "no Text" }: CircleProps) => {
  return (
    <CircleEle bg={bg} border={border}>
      {text}
    </CircleEle>
  );
};

export default Circle;
