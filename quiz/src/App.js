import "./App.scss";
import React from "react";

const questions = [
    {
        title: "React - это ... ?",
        variants: ["библиотека", "фреймворк", "приложение"],
        correct: 0,
    },
    {
        title: "Компонент - это ... ",
        variants: [
            "приложение",
            "часть приложения или страницы",
            "то, что я не знаю что такое",
        ],
        correct: 1,
    },
    {
        title: "Что такое JSX?",
        variants: [
            "Это простой HTML",
            "Это функция",
            "Это тот же HTML, но с возможностью выполнять JS-код",
        ],
        correct: 2,
    },
];

const Result = ({correct}) => {
    return (
        <div className="result">
            <img src=".././complete.png" alt=""></img>
            <h2>Вы ответили правильно на {correct} вопроса из {questions.length}</h2>
            <a href="/"><button> Попробовать снова </button></a>
        </div>
    );
};

const Game = ({ question, step, onClickVariant }) => {
    const progress = Math.round((step / questions.length) * 100);

    return (
        <div>
            <div className="progress">
                <div
                    style={{ width: `${progress}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                    <li key={text} onClick={() => onClickVariant(index)}>
                        {text}
                    </li>
                ))}
            </ul>

            {/*   */}
        </div>
    );
};

function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0); 

    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);

        if ( index === question.correct) {
          setCorrect( correct + 1);
        }
    };

    return (
        <div className="App">
            {step !== questions.length ? (
                <Game
                    step={step}
                    question={question}
                    onClickVariant={onClickVariant}
                />
            ) : (
                <Result correct={correct} />
            )}
        </div>
    );
}

export default App;
