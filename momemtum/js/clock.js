const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; 
}

// setInterval(실행하고자하는 함수, 호출되는 함수의 간격의 몇ms로할건지)
// setInterval(sayHello, 5000);

// setTimeout(실행하고자하는 함수, 함수 호출 전 얼마나 기다릴건지)
// setTimeout(sayHello, 5000);

getClock();
setInterval(getClock, 1000);