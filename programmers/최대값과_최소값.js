function solution(s) {
  var answer = "";
  let temp = s.split(" ").map((data) => Number(data));
  answer = String(Math.min(...temp)) + " " + String(Math.max(...temp));

  return answer;
}
