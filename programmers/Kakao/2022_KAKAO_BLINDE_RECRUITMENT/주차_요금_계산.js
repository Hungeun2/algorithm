function hourToMin(time) {
  let min = 0;
  time = time.split(":");
  min = Number(time[0]) * 60 + Number(time[1]);
  return min;
}

function calMoney(fees, time) {
  [basic, basic_cost, m_time, m_cost] = [...fees];
  if (time <= basic) {
    return basic_cost;
  } else {
    return basic_cost + Math.ceil((time - basic) / m_time) * m_cost;
  }
}

function solution(fees, records) {
  var answer = [];
  let records_obj = {};

  records.forEach((data) => {
    data = data.split(" ");
    const time = hourToMin(data[0]);
    const car_number = data[1];

    if (car_number in records_obj) {
      records_obj[car_number].time_list.push(time);
    } else {
      records_obj[car_number] = {
        time_list: [time],
      };
    }
  });

  Object.keys(records_obj).forEach((data) => {
    if (records_obj[data]["time_list"].length % 2 !== 0)
      records_obj[data]["time_list"].push(1439);
  });

  Object.keys(records_obj)
    .sort((a, b) => a - b)
    .forEach((data) => {
      let sum_time = 0;
      let time_list = records_obj[data]["time_list"];
      for (i = 0; i < time_list.length / 2; i++) {
        sum_time += time_list[i * 2 + 1] - time_list[2 * i];
      }
      answer.push(calMoney(fees, sum_time));
    });
  return answer;
}
