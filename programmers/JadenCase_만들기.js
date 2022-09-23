function solution(s) {
  var answer = "";
  let temp = [];

  s.toLowerCase()
    .split(" ")
    .forEach((data) => {
      if (data.charCodeAt([0]) >= 97 && data.charCodeAt([0]) <= 122) {
        data = data.replace(data[0], data[0].toUpperCase());
      }
      temp.push(data);
    });
  answer = temp.join(" ");
  return answer;
}
