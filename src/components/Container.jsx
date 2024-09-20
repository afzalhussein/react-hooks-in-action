import React, { useState, useMemo } from "react";
import { quizzes } from "../service/quizzes";
import TopBar from "./TopBar";
import Quiz from "./Quiz";
import { QuizContext } from "./QuizContext";

export default function Container () {
  const [ current, setCurrent ] = useState( 0 );

  const [ question, answer ] = useMemo( () => { return quizzes[ current ] }, [ current ] );
  const styles = { display: "flex", justifyContent: "space-between" };
  return (
    <QuizContext.Provider value={ quizzes }>
      <TopBar styles={ styles } current={ current } setCurrent={ setCurrent } />
      <hr />
      <Quiz question={ question } answer={ answer } />
    </QuizContext.Provider>
  );
}

