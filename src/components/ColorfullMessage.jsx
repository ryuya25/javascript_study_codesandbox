export const ColorfulMessage = ({ color, children }) => {
  const contentStyleA = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
