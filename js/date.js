const date = document.querySelector("h2#date");
const days = document.querySelector("h2#days");

function getDate(){
  const weeks = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const theDate = new Date();
  const year = theDate.getFullYear();
  const month = theDate.getMonth()+1;
  const day = theDate.getDate();
  const week = weeks[theDate.getDay()];
  date.innerText = `안녕! 오늘은 ${year}년 ${month}월 ${day}일 ${week}이야`;

 const stDate = new Date(2017,03,20);
 const endDate = new Date(year, month, day);
 const btMonth = endDate.getTime() - stDate.getTime();
 const btDay = btMonth / (1000*60*60*24);
 days.innerText = `우리가 만난지 ${btDay+1}일 되는 날이지!`;
}

getDate();
