const priorityMap = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
  "^": 2
};
const functionMap = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "^": (a, b) => a ** b
};
export const evalInfixExpression = (text) => {
  const cleaned = text.replace(/\s/g, "").split("");
  let num = "";
  const nums = [];
  const ops = [];
  const parts = [];
  let order = [];
  for (let x = 0; x < cleaned.length; x++) {
    const char = cleaned[x];
    if (char === "(") {
      const end = cleaned.indexOf(")");
      const nested = cleaned.slice(x, end + 1);
      x = end;
      nested.pop();
      nested.shift();
      num = evalInfixExpression(nested.join("")).toString();
      continue;
    }
    if (isNaN(parseInt(char))) {
      nums.push(parseInt(num));
      num = "";
      ops.push({op: char, p: priorityMap[char]});
      continue;
    }
    num += char;
  }
  nums.push(parseInt(num));
  for (let i = 0; i < ops.length; i++) {
    order.push(i);
  }
  order = order.sort((a, b) => ops[b].p - ops[a].p);

  for (let i = 0; i < ops.length; i++) {
    const a = nums[i];
    const b = nums[i + 1];
    const op = ops[i].op;
    parts.push({a, b, op});
  }

  while (order.length !== 1) {
    const index = order.shift();
    for (let i = 0; i < order.length; i++) {
      if (order[i] > index) {
        order[i]--;
      }
    }
    const part = parts[index];
    const out = functionMap[part.op](part.a, part.b);
    parts.splice(index, 1);
    if (index !== 0) {
      parts[index - 1].b = out;
    }
    if (index !== order.length) {
      parts[index].a = out;
    }
  }
  const last = parts[0];
  return functionMap[last.op](last.a, last.b);
};