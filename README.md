# React Hooks in Action

I will be creating a quiz app showing the following functionality and UI:

```text
+------------------------------------------------+
| 1 of 2                                    Next |
|------------------------------------------------|
| Question                                  Hide |
| What is the name of the 25th James Bond film?  |
|------------------------------------------------|
| Answer                                    Hide |
| No Time To Die                                 |
+------------------------------------------------+
```

Please notice that both question and answer are structurally the same. If planned carefully, that can be served by one component taking different outputs to render both types of components.

For Question:

```text
Title: 'Question'
Description: 'What is the name of the 25th James Bond film?'
Show: true
```

And for Answer:

```text
Title: 'Answer'
Description: 'No Time To Die'
Show: true
```

Container:

```text
Total: 2
Current: 1
ShowNext: true
```

The Container will show the entire question and answer along with current and total items in quiz. I would use component composition instead of nesting components inside container:

```React
const Container = (props)=>{
    const [current, setCurrent] = useState(1)
    return (
        <div>
        {current} of {props.quizzes.length}
            {props.children}
        </div>
    )
}

const TextBox = (props)=>{
    return (
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    )
}

const quizzes=[
        [
            {
                title: 'Question',
                description: 'What is the name of the 25th James Bond film?'
            },
            {
                title: 'Answer',
                description: 'No Time To Die'
            }
        ]
    ]

<Container data={quizzes}>
    {
        quizzes.map(([quiz, answer])=>{
            return (
                <>
                    <TextBox title={quiz.title} description={quiz.description}/>
                    <TextBox title={answer.title} description={answer.description}>
                </>
            )
        })
    }
</Container>

```
