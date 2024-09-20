export default function Status ( { current, quizzes } ) {
    console.log( 'Status rendered' );
    return ( <>{ current + 1 } of { quizzes.length }</> )
}