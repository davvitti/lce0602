const quizData = [
    {
        question: "Média",
        options: ["40,00 kg", "41,75 kg", "41,50 kg", "42,00 kg"],
        correct: "41,75 kg"
    },
    {
        question: "Moda",
        options: ["40 kg", "37 kg", "45 kg", "40 kg"],
        correct: "45 kg"
    },
    {
        question: "Mediana",
        options: ["43 kg", "41 kg", "45 kg", "40 kg"],
        correct: "43 kg"
    },
    {
        question: "Variância",
        options: ["28,20", "28,10", "27,90", "28,30"],
        correct: "28,20"
    },
    {
        question: "Desvio-padrão",
        options: ["5,31", "5,28", "5,25", "5,19"],
        correct: "5,31"
    },
    {
        question: "Quartil 1",
        options: ["2", "3", "4", "5"],
        correct: "2"
    },
    {
        question: "Quartil 3",
        options: ["2", "3", "4", "5"],
        correct: "2"
    },
    {
        question: "AIQ",
        options: ["2", "3", "4", "5"],
        correct: "2"
    },
    {
        question: "Coeficiente de variação",
        options: ["15,00%", "12,72%", "13,05%", "11,88%"],
        correct: "12,72%"
    },
    {
        question: "Quais dessas variáveis são qualitativas ordinais?",
        options: ["Escolaridade, Classe social","Salário, Cargo", "Classe social, Tipo de solo", "Tempo, Doses de fertilizantes"],
        correct: "Escolaridade, Classe social"
    },
    {
        question: "Quais dessas variáveis são qualitativas nominais?",
        options: ["Escolaridade, Classe social","Salário, Cargo", "Tipo de solo, Religião", "Tempo, Doses de fertilizantes"],
        correct: "Tipo de solo, Religião"
    },
    {
        question: "Quais dessas variáveis são quantitativas discretas?",
        options: ["Número de livros de estatística","Salário, Cargo", "Tipo de solo, Religião", "Tempo, Doses de fertilizantes"],
        correct: "Número de livros de estatística"
    },
    {
        question: "Quais dessas variáveis são quantitativas contínuas?",
        options: ["Número de livros de estatística","Salário, Cargo", "Tipo de solo, Religião", "Doses de fertilizantes"],
        correct: "Doses de fertilizantes"
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
