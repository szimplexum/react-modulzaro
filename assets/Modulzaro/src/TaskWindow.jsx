import "bootstrap/dist/css/bootstrap.min.css";
import TaskProgressBar from "./TaskProgressBar";
import TaskButtons from "./TaskButtons";
import TaskQuestions from "./TaskQuestions";

export default function TaskWindow() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-50">
          <div>
            <TaskProgressBar />
          </div>
          <div>
            <TaskQuestions />
          </div>
          <div>
            <TaskButtons />
          </div>
        </div>
      </div>
    </>
  );
}
