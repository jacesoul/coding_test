function solution(nums) {
  let answer;
  const numLength = nums.length / 2;
  const uniqSet = new Set(nums);
  const uniqLength = uniqSet.size;

  uniqLength > numLength ? (answer = numLength) : (answer = uniqLength);

  return answer;
}
