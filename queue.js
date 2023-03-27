function solution(priorities, location) {
  const queue = [];

  for (let i = 0; i < priorities.length; i += 1) {
    queue.push([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;

  while (true) {
    const currentValue = queue[0];
    if (currentValue[0] < priorities[count]) {
      queue.shift();
      queue.push(currentValue);
    } else {
      const value = queue.shift();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}
