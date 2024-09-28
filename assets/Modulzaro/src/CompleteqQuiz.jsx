import { useContext, useState } from "react";
import Modal from "react-modal";
import { QuizContext } from "./services/QuizProvider";


export default function CompleteqQuiz() {
  const { isModalOpen, setIsModalOpen } = useContext(QuizContext);
  const { pageProgress } = useContext(QuizContext);
  const { answerNumber } = useContext(QuizContext);
  const { countOfcorrectAnswer, setCountOfcorrectAnswer } =
    useContext(QuizContext);
  const progressLevel = Math.floor((countOfcorrectAnswer / answerNumber) * 100);

  //   const displayedAnswer = '';

  //   if (progressLevel < 40) {
  //     displayedAnswer =<>
  //     <div> You can do it better!</div>
  //     <p>Final score:</p>
  //     <h2>{progressLevel}%</h2>
  //     <button className="btn btn-primary"></button>
  //   </>
  //   } else if (progressLevel > 70) {
  //   } else {
  //   }
const handleRestart=()=>{window.location.reload(true);}
  return (
    <>
      <Modal
        isOpen={isModalOpen}
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
        <h3 className="text-center">Thank you for your answers, here is your score </h3>
        {progressLevel<=40 && <>
        <div className="alert alert-danger text-center fit-content"> You can do it better!</div>
        <p className="text-center">Final score:</p>
        <h2 className="text-center">{progressLevel}%</h2>
        <button onClick={handleRestart} className="btn border border-danger">Restart Quiz</button>
        </>}
        {progressLevel>40 && progressLevel<=70 &&<>
        <div className="alert alert-warning text-center fit-content"> Not bad!</div>
        <p className="text-center">Final score:</p>
        <h2 className="text-center">{progressLevel}%</h2>
        <button onClick={handleRestart} className="btn border border-warning">Restart Quiz</button>
        </>}
        {progressLevel>70 &&<>
        <div className="alert alert-success text-center fit-content"> Congratulation!</div>
        <p className="text-center">Final score:</p>
        <h2 className="text-center">{progressLevel}%</h2>
        <button onClick={handleRestart} className="btn border border-success">Restart Quiz</button>
        </>}
      </Modal>
      
    </>
  );
}
