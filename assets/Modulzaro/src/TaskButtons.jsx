import React from "react";
import { QuizContext } from "./services/QuizProvider";
import { useContext } from "react";

export default function TaskButtons() {
  const { answerNumber } = useContext(QuizContext);
  const { pageProgress, setPageProgress } = useContext(QuizContext);
  const { correctAnswer, setCorrectAnswer } = useContext(QuizContext);
  const { countOfcorrectAnswer, setCountOfcorrectAnswer } =
    useContext(QuizContext);
  const { setIsModalOpen } = useContext(QuizContext);

const handleResponse=()=>{
     setIsModalOpen(true)}
  
  const handleNextButtonClick = () => {
    if (pageProgress < answerNumber) {
      setPageProgress(pageProgress + 1);
    } else {
    }
    setCountOfcorrectAnswer(countOfcorrectAnswer + correctAnswer);
  };
  console.log("Helyes válaszok száma:", countOfcorrectAnswer);
  return (
    <div className="container border rounded-bottom p-3 bg-light text-dark d-flex justify-content-between">
      {pageProgress < answerNumber ? (
        <button className="btn btn-primary" onClick={handleNextButtonClick}>
          Next Question
        </button>
      ) : (
        <button onClick={handleResponse} className="btn btn-warning ">No more question, SHOW my rates</button>
      )}
      <button className="btn btn-success">Add New Question</button>
    </div>
  );
}
