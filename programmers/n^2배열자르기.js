// 시간 초과
// function find(n,x,y){
//   let num = 0
//   if (y <= x) {
//       num = x + 1
//   } else {
//       num = y + 1
//   }
//   return num;
// }
// function solution(n, left, right) {
//   var answer = [];
//   const start = [parseInt(left / n), left % n]
//   const end = [parseInt(right/n), right % n]

//   for (p=start[0]; p<=end[0]; p++){
//       if (p === start[0]){
//           for (q=start[1]; q<n; q++){
//               answer.push(find(n,p,q))
//          }
//       } else if(p === end[0]){
//           for (q=0; q<=end[1]; q++){

//               answer.push(find(n,p,q))
//          }
//       } else {
//           for (q=0; q<n; q++){
//               answer.push(find(n,p,q))
//          }
//       }

//   }
//   return answer;
// }

function solution(n, left, right) {
  var answer = [];
  for (i = left; i <= right; i++) {
    i / n > i % n ? answer.push(parseInt(i / n) + 1) : answer.push((i % n) + 1);
  }

  return answer;
}
