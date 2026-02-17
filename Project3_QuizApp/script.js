const questions = [
    {
        question: "What is the capital of France?",
        answer: [
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Delhi", correct: false},
        ]
    },
    {
        question: "What is the capital of Germany?",
        answer: [
            {text: "Paris", correct: false},
            {text: "London", correct: false},
            {text: "Berlin", correct: true},
            {text: "Delhi", correct: false},
        ]
    },
    {
        question: "What is the capital of India?",
        answer: [
            {text: "Paris", correct: false},
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Delhi", correct: true},
        ]
    },
    {
        question: "What is the capital of Japan?",
        answer: [
            {text: "Paris", correct: false},
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Tokyo", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


