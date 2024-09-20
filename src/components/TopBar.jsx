import Status from "./Status";
import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function TopBar ( { styles, current, setCurrent } ) {
    const quizzes = useContext( QuizContext )
    return <div style={ styles }>
        <Status current={ current } quizzes={ quizzes } />
        <button onClick={ () => setCurrent( ( current + 1 ) % quizzes?.length ) }>
            Next
        </button>
    </div>;
}