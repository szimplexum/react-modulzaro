import { createContext, useState } from "react";

// export const QuizContext = createContext({answers:{answer:'', correctAnswer:'', progress:''}, setAnswers:''});
export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState();
  const [questionCategory,setQuestionCategory]=useState('');
  const [answerNumber, setAnswerNumber] = useState(0);
  const [pageProgress, setPageProgress] = useState(0);
  const [correctAnswer, setCorrectAnswer] =useState(0);
  const [countOfcorrectAnswer, setCountOfcorrectAnswer] =useState(0);
  const [getNewQuestion, setGetNewQuestion] =useState(false);

  return (
    <>
      <QuizContext.Provider
        value={{ pageProgress, setPageProgress, answerNumber, setAnswerNumber, correctAnswer, setCorrectAnswer, countOfcorrectAnswer, setCountOfcorrectAnswer, questionCategory,setQuestionCategory, isModalOpen, setIsModalOpen, getNewQuestion, setGetNewQuestion}}
      >
  
        {children}
      </QuizContext.Provider>
    </>
  );
}
