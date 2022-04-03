import styled from "@emotion/styled";

import Circle from "./ts/Circle";

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Ts = () => {
  const AlertPerson = (name: string, age: number): void => {
    console.log(`${name}님은 ${age}살입니다.`);
  };
  AlertPerson("gungo", 4);
  AlertPerson("midnam", 34);

  return (
    <>
      <Container>
        <Circle border={true} bg="tomato" />
        <Circle text="hello TS" bg="yellow" />
        <Circle bg="green" />
      </Container>
    </>
  );
};

export default Ts;
