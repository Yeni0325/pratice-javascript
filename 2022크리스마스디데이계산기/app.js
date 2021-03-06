const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2022-12-25:00:00:00+0900");
  const now = new Date();
  const gap = xmasDay - now;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24)); //일
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24); //시
  const minutes = Math.floor((gap / (1000 * 60)) % 60); //분
  const seconds = Math.floor((gap / 1000) % 60); //초

  clockTitle.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

getTime();
setInterval(getTime, 1000);