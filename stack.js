function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
