import React, { useState, useRef } from "react";

const TsForm = () => {
  const [value, setValue] = useState("");
  const wellcomeRef = useRef<HTMLHeadingElement>(null); // !의미 알아보기

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
    wellcomeRef.current!.innerText = `${value}님 안녕하세요.`;
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="name..."
        />
        <button>확인</button>
      </form>
      <h2 ref={wellcomeRef} />
    </>
  );
};

export default TsForm;
