const quizData = [
    {
        question: "Quais são os príncipios básicos da experimentação?",
        options: ["Repetição", "Brasília", "São Paulo", "Salvador"],
        correct: "Brasília"
    },
    {
        question: "Qual é a maior floresta tropical do mundo?",
        options: ["Floresta Negra", "Floresta Amazônica", "Floresta de Sherwood", "Floresta de Taiga"],
        correct: "Floresta Amazônica"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correct: "Leonardo da Vinci"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    quizData.forEach((q, index) => {
        const questionElem = document.createElement('div');
        questionElem.classList.add('question');
        questionElem.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <ul class="options">
                ${q.options.map(option => `
                    <li>
                        <label>
                            <input type="radio" name="question${index}" value="${option}"> ${option}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionElem);
    });
}

function submitQuiz() {
    const answers = quizData.map((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        return selectedOption ? selectedOption.value : null;
    });

    let score = 0;
    answers.forEach((answer, index) => {
        const questionElem = document.querySelectorAll('.question')[index];
        const optionsElems = questionElem.querySelectorAll('li');

        optionsElems.forEach(optionElem => {
            const input = optionElem.querySelector('input');
            const label = optionElem.querySelector('label');

            if (input.value === quizData[index].correct) {
                label.classList.add('correct');
            } else if (input.checked) {
                label.classList.add('incorrect');
            }
        });

        if (answer === quizData[index].correct) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

window.onload = loadQuiz;
