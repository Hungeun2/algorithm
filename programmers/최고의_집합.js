function solution(n, s) {
  var answer = [];
  if (s === 1 || n > s) return (answer = [-1]);
  if (n === 1) return (answer = [s]);

  for (i = 0; i < n; i++) {
    answer.push(parseInt(s / n));
  }

  if (s / n === parseInt(s / n)) {
    return answer;
  } else {
    for (i = 0; i < s % n; i++) {
      answer[i] += 1;
    }
    answer.reverse();
  }
  return answer;
}
