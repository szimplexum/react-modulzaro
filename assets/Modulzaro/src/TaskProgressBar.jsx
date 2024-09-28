import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function TaskProgressBar() {
  const now = 59;

  return (
    <div className="p-3 mb-2 bg-light text-dark border rounded-top">
      <h5>Questions category:</h5>

      <ProgressBar animated striped now={now} label={`${now}%`} />
    </div>
  );
}
