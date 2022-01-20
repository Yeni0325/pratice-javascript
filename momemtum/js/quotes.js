const quotes = [
    {
        quote: "당신이 할 수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author: "헨리 포드"
    },
    {
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
        author: "데모스테네스"
    },
    {
        quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author: "헬렌켈러"
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라.",
        author: "p.시루스"
    },
    {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author: "오손 웰스"
    },
    {
        quote: "가난은 가난하다고 느끼는 곳에 존재한다.",
        author: "에머슨"
    },
    {
        quote: "문제점을 찾지 말고 해결책을 찾으라.",
        author: "헨리 포드"
    },
    {
        quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
        author: "헨리 포드"
    },
    {
        quote: "길을 잃는 다는 것은 곧, 길을 알게 된다는 것이다.",
        author: "동아프리카속담"
    },
    {
        quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려산다.",
        author: "J.하비스"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;