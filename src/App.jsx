import { ColorfulMessage } from "./components/ColorfullMessage";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気ですよ！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
