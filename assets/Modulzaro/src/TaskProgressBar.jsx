import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { QuizContext } from "./services/QuizProvider";
import { useContext } from "react";

export default function TaskProgressBar() {
  const { pageProgress } = useContext(QuizContext);
  const { answerNumber } = useContext(QuizContext);
  const {questionCategory}= useContext(QuizContext)

  const progressLevel = Math.floor((pageProgress / answerNumber) * 100);

  return (
    <div className="p-3 mb-2 bg-light text-dark border rounded-top">
      <h5>Questions category: {questionCategory}</h5>

      <ProgressBar
        animated
        striped
        now={progressLevel}
        label={`${progressLevel}%`}
      />
    </div>
  );
}
