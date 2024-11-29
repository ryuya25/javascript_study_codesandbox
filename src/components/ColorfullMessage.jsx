export const ColorfulMessage = ({ color, children }) => {
  //  console.log("--ColorfulMessage--" + color + children);
  console.log("--ColorfulMessage--");
  const contentStyleA = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
