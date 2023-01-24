//현재 월, 일 받기
export const strDate = (date) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${month}월 ${day}일`;
};
//요일 받기
export const strDay = (date) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[new Date(date).getDay()];
  return dayOfWeek;
};

export const strYear = (date) => {
  let year = date.getFullYear();
  return `${year}년`;
};
