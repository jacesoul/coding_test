function solution(array, commands) {
  var answer = [];
  commands.forEach((command) => {
    const arr = array.slice(command[0] - 1, command[1]);
    arr.sort((a, b) => a - b);
    const output = arr[command[2] - 1];

    answer.push(output);
  });
  return answer;
}
