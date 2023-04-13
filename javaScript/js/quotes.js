const quotes = [
    {
        quote:" Regret for wasted time is more wasted time.",
        author: "메이슨 쿨리"
    },
    {
        quote:" He not busy being born in busy dying.",
        author: "밥 딜런"
    },
    {
        quote:" To love someone, you have to love yourself first.",
        author: "미녀와 야수"
    },
    {
        quote:" Fashion is made to become unfashionable.",
        author: "가브리엘(코코)샤넬"
    },
    {
        quote:" Passion governs, and she never governs wisely",
        author: "벤자민 프랭클린"
    },
    {
        quote:" He who has never hoped can never despair.",
        author: "조지 버나드 쇼"
    },
    {
        quote:" There is no great genius without some touch of madness.",
        author: "세네카"
    },
    {
        quote:" Only in the agony of parting do we look into the depths of lov",
        author: "조지 앨리엇"
    },
    {
        quote:" I was born with an enormous need for affection, and a terrible need to give it.",
        author: "오드리 햅번"
    },
    {
        quote:" All would live long, but none would be old.",
        author: "벤자민 프랭클린"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*10)];

quote.innerText  = todayQuote.quote;
author.innerText = todayQuote.author;