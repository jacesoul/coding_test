function solution(nums) {
  let answer;
  const numLength = nums.length / 2;
  const uniqSet = new Set(nums);
  const uniqLength = uniqSet.size;

  uniqLength > numLength ? (answer = numLength) : (answer = uniqLength);

  return answer;
}

// 좋은 솔루션
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
