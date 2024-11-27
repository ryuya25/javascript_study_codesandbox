import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfullMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum((prev) => {
      return prev + 1;
    });
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気ですよ！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
