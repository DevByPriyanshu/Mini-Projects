const questions = [
    {
        question: "Which is the correct syntax to take input in C++?",
        answers: [
            { text: "cin >> n;", correct: true },
            { text: "cin << n;", correct: false },
            { text: "input >> n;", correct: false },
            { text: "read(n);", correct: false },
        ]
    },
    {
        question: "What is the size of int in most modern C++ compilers?",
        answers: [
            { text: "2 bytes", correct: false },
            { text: "4 bytes", correct: true },
            { text: "8 bytes", correct: false },
            { text: "Depends on compiler only", correct: false },
        ]
    },
    {
        question: "Which data structure uses LIFO (Last In First Out)?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Array", correct: false },
            { text: "Linked List", correct: false },
        ]
    },
    {
        question: "Which keyword is used to define a constant in C++?",
        answers: [
            { text: "const", correct: true },
            { text: "define", correct: false },
            { text: "static", correct: false },
            { text: "immutable", correct: false },
        ]
    },
    {
        question: "Which of the following is a valid loop in C++?",
        answers: [
            { text: "for(int i=0; i<n; i++)", correct: true },
            { text: "loop(i=0; i<n; i++)", correct: false },
            { text: "repeat(i=0; i<n)", correct: false },
            { text: "iterate(i=0; i<n)", correct: false },
        ]
    },
    {
        question: "Which operator is used for equality comparison in C++?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: true },
            { text: "!=", correct: false },
            { text: "<>", correct: false },
        ]
    }
];

let currentQuestionIndex = 0;

const questionEl = document.getElementById("question");
questionEl.innerText = questions[currentQuestionIndex].question;
const optionEl = document.getElementById("options");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

function showQuestion() {
    const currQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currQuestion.question;
    optionEl.innerHTML = "";

    currQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerText = ans.text;
        button.classList.add("btn");
        optionEl.appendChild(button);

        button.addEventListener("click", () => {
            if (ans.correct) {
                button.style.backgroundColor = "green";
            }
            else {
                button.style.backgroundColor = "red";
                button.style.color = "white";
            }
            const allButton = document.querySelectorAll(".btn");
            allButton.forEach((btn, index) => {
                if (questions[currentQuestionIndex].answers[index].correct) {
                    btn.style.backgroundColor = "green";
                    btn.style.color = "white";
                }
                btn.disabled = true;
            });
        });
        optionEl.appendChild(button);
    });
}
showQuestion();