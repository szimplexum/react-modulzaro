import React, { useEffect, useState } from "react";
import { QuizContext } from "./services/QuizProvider";
import { useContext } from "react";

export default function TaskQuestions() {
  const { questionCategory, setQuestionCategory } = useContext(QuizContext);
  const { pageProgress, setPageProgress } = useContext(QuizContext);
  const { answerNumber, setAnswerNumber } = useContext(QuizContext);
  const { correctAnswer, setCorrectAnswer } = useContext(QuizContext);
  const { IsModalOpen, setIsModalOpen } = useContext(QuizContext);
  const [questions, setQuestion] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const numberOfQuestion = pageProgress;

  const [formData, setFormData] = useState({
    option: "",
    answer: 0,
    correctAnswer: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((questions) => {
        setQuestion(questions);
        setQuestionCategory(questions[numberOfQuestion].category);
        setAnswerNumber(Object.entries(questions).length - 1);
        setIsLoaded(true);
        //console.table(questions[0].options[0]);
        console.log("A jó válasz: ", questions[numberOfQuestion].correctAnswer);
      });
  }, [pageProgress, IsModalOpen]);

  const handleInputCheck = (e) => {
    const { value, checked } = e.target;
    const correctAnswer = questions[numberOfQuestion].correctAnswer;

    setFormData({
      ...formData,
      option: value,
      answer: formData.answer + 1,
      correctAnswer: value == correctAnswer ? 1 : 0,
    });
    setCorrectAnswer(formData.correctAnswer);
    console.table("Correct:", formData.correctAnswer);
  };

  return (
    <>
      {isLoaded && (
        <div className="container ">
          <div>
            <p>
              Question: <strong>{questions[numberOfQuestion].question}</strong>
            </p>
            <p>
              {answerNumber} kérdésből {pageProgress} választ adtál
            </p>
          </div>
          <div>
            <form className="form-controll">
              {questions[numberOfQuestion].options.map((option) => (
                <div key={option}>
                  <label
                    className="btn btn-primary form-control m-1"
                    htmlFor={option}
                  >
                    {option}
                  </label>
                  <input
                    className="d-none"
                    type="radio"
                    id={option}
                    name={option}
                    value={option}
                    checked={formData.option === option}
                    onChange={handleInputCheck}
                  ></input>
                </div>
              ))}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
