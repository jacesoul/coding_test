function solution(no, works) {
  let result = 0;

  for (let i = 0; i < no; i++) {
    works.sort((a, b) => b - a);
    works[0] -= 1;
  }

  works.forEach((e) => {
    result += e ** 2;
  });

  return result;
}
