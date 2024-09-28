import { useContext, useState } from "react";
import Modal from "react-modal";
import { QuizContext } from "./services/QuizProvider";

export default function AddNewQuestion() {
  const { getNewQuestion, setGetNewQuestion } = useContext(QuizContext);

  const [formData, setFormData] = useState({
    category: "category",
    question: "question",
    options: ["","","",""],
    correctAnswer: "correctAnswer",
  });
const isSaveNewAnswer=false;
  const handleSubmit = (e) => {
    
    console.table(formData);
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
    isSaveNewAnswer= true
  };

  const handleCancelButton = () => {
    setGetNewQuestion(false);
  };

  return (
    <>
      <Modal
        isOpen={getNewQuestion}
        style={{
          overlay: {
            position: "fixed",

            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%,-50%)",
          },
        }}
      >
        <h3 className="text-center">Add new question</h3>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="category">Question category</label>
            <input
              type="input"
              class="form-control"
              id="category"
              aria-describedby="category"
              placeholder="category"
              required
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="question">Question</label>
            <input
              type="textarea"
              class="form-control"
              id="question"
              aria-describedby="question"
              placeholder="question"
              required
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="options1">Option 1</label>
            <input
              type="input"
              class="form-control"
              id="options1"
              aria-describedby="options1"
              placeholder="options1"
              onChange={(e) => handleOptionChange(0, e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="options2">Option 2</label>
            <input
              type="input"
              class="form-control"
              id="options2"
              aria-describedby="options2"
              placeholder="options2"
              onChange={(e) => handleOptionChange(1, e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="options3">Option 3</label>
            <input
              type="input"
              class="form-control"
              id="options3"
              aria-describedby="options3"
              placeholder="options3"
              onChange={(e) => handleOptionChange(2, e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="options4">Option 4</label>
            <input
              type="input"
              class="form-control"
              id="options4"
              aria-describedby="options4"
              placeholder="options4"
              onChange={(e) => handleOptionChange(3, e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="correctAnswer">correctAnswer</label>
            <input
              type="input"
              class="form-control"
              id="correctAnswer"
              aria-describedby="correctAnswer"
              placeholder="correctAnswer"
              onChange={(e) =>
                setFormData({ ...formData, correctAnswer: e.target.value })
              }
            />
          </div>
          <div className="container d-flex justify-content-between">
            <button
              className="btn btn-secondary m-1"
              onClick={handleCancelButton}
            >
              Cancel
            </button>

            <button type="submit" className="btn btn-primary m-1">
              Add Question
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={isSaveNewAnswer}
        style={{
          overlay: {
            position: "fixed",

            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%,-50%)",
          },
        }}
      >
        <h1 className="text-center text-success">New Question has benn saved!</h1>
        
         </Modal>
    </>
  );
}
