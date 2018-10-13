export const concat = (...args) => {
  let argmts = args;
  let result = argmts.reduce((pre, cur) =>{
    return cur ? pre.concat(cur) : pre;
  })
  let length = argmts[0].length; //get first array length
  argmts[0].push(...result)
  argmts[0].splice(0,length) //mutate the first array aka source array
  return result;
};
