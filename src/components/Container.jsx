import React, { useState } from "react";
import TextBox from "./TextBox";

export default function Container() {
  const [current, setCurrent] = useState(0);
  const quizzes = [
    [
      { title: "Question", description: "First question" },
      { title: "Answer", description: "First answer" },
    ],
    [
      { title: "Question", description: "Second question" },
      { title: "Answer", description: "Second answer" },
    ],
  ];
  const [question, answer] = quizzes[current];
  const styles = { display: "flex", justifyContent: "space-between" };
  return (
    <>
      <div style={styles}>
        {current + 1} of {quizzes.length}
        <button onClick={() => setCurrent((current + 1) % quizzes.length)}>
          Next
        </button>
      </div>
      <hr />
      <TextBox data={question} display={true} />
      <hr />
      <TextBox data={answer} display={false} />
    </>
  );
}
