const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(n, k) {
  var answer = -1;
  const num_list = n.toString(k).split("0");
  answer = num_list.filter((data) => isPrime(Number(data))).length;
  return answer;
}
