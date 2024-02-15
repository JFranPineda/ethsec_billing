export const actionAppHandler = ({ actionHandlers, type }) => {
  const splittedType = type.split("/");
  const typeRoute = splittedType.slice(0, -1).join("/");
  const actionHandler = actionHandlers[typeRoute];
  if (actionHandler) {
    console.log("action middleware: ", type);
    actionHandler();
  }
};
