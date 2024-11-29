import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfullMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  console.log("--App--" + num);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    //    setNum((prev) => {
    //       return prev + 1;
    //     });
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    console.log("--useEffect--");
    if (num > 0) {
      if (num % 3 == 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気ですよ！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>( ｀ー´)ノ</p>}
    </>
  );
};
