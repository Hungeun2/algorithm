// brute-force 실패
// function solution(board, skill) {
//   var answer = 0;
//   skill.forEach((action) => {
//     let [type, r1, c1, r2, c2, degree] = [...action];
//     for (r = r1; r <= r2; r++) {
//       for (c = c1; c <= c2; c++) {
//         if (type === 1) {
//           board[r][c] -= degree;
//         } else {
//           board[r][c] += degree;
//         }
//       }
//     }
//   });
//   board.forEach((data) => {
//     console.log(data);
//     answer += data.filter((e) => e >= 1).length;
//   });

//   return answer;
// }

//

// 누적합 참조
//https://tech.kakao.com/2022/01/14/2022-kakao-recruitment-round-1/#%EB%AC%B8%EC%A0%9C-6-%ED%8C%8C%EA%B4%B4%EB%90%98%EC%A7%80-%EC%95%8A%EC%9D%80-%EA%B1%B4%EB%AC%BC

function solution(board, skill) {
  var answer = 0;
  const row = board.length;
  const col = board[0].length;
  const newBoard = Array.from({ length: row + 1 }, () =>
    Array(col + 1).fill(0)
  );

  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = [...skill[i]];
    newBoard[r1][c1] += type === 1 ? -degree : degree;
    newBoard[r1][c2 + 1] += type === 1 ? degree : -degree;
    newBoard[r2 + 1][c1] += type === 1 ? degree : -degree;
    newBoard[r2 + 1][c2 + 1] += type === 1 ? -degree : degree;
  }

  for (i = 0; i < row; i++) {
    let sum = 0;
    for (j = 0; j < col; j++) {
      sum += newBoard[i][j];
      newBoard[i][j] = sum;
    }
  }

  for (i = 0; i < col; i++) {
    let sum = 0;
    for (j = 0; j < row; j++) {
      sum += newBoard[j][i];
      newBoard[j][i] = sum;
    }
  }

  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      board[i][j] += newBoard[i][j];
      if (board[i][j] > 0) {
        answer++;
      }
    }
  }
  console.log(newBoard);
  return answer;
}
