const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          sideLinkBg: { main: "#e0e0e0" },
        }
      : {
          // palette values for dark mode
          sideLinkBg: { main: "#424242" },
        }),
  },
});
export default getDesignTokens;
