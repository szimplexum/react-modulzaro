import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from 'react';
import QuizProvider, { QuizContext } from "./services/QuizProvider";

import CompleteqQuiz from "./CompleteqQuiz";
import TaskProgressBar from "./TaskProgressBar";
import TaskButtons from "./TaskButtons";
import TaskQuestions from "./TaskQuestions";

export default function TaskWindow() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-50">
          <QuizProvider>
            <CompleteqQuiz/>
            <TaskProgressBar />
            <TaskQuestions />
            <TaskButtons />
          </QuizProvider>
        </div>
      </div>
    </>
  );
}
