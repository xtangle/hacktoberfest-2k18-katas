export const argsString = (message, args) => {
  let i = 0;
  return message.replace(/\{\}/g, () => args[i++]);
};
