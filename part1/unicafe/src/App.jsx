import { useState } from 'react'
import './App.css'

const Display = ({header}) => <h1>{header}</h1>

const Button = (props) => {
    return (
    <div>
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    </div>
    )
}

const Statistics = (props) => {
    return (
        <div>
        <p>{props.text}: {props.count}</p>
    </div>
    )
}
const App = () => {
    const head = "give feedback"
    const subhead = "statistics"
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const [totalClicks, setTotalClicks] = useState(0)

    const handleGoodClicks = () => {
        const newGood = good + 1
        setGood(newGood)
        setTotalClicks(newGood + bad + neutral)
    }

    const handleNeutralClicks = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
        setTotalClicks(newNeutral + bad + good)
    }

    const handleBadClicks = () => {
        const newBad = bad + 1
        setBad(newBad)
        setTotalClicks(good + newBad + neutral)
    }

    return (
        <div>
            <div>
            <Display header={head} />
            <Button handleClick={handleGoodClicks} text={"good"}/>
            <Button handleClick={handleNeutralClicks} text={"neutral"} />
            <Button handleClick={handleBadClicks} text={"bad"} />
            </div>

            <div>
                <Display header={subhead} />
                <Statistics text={"good"} count={good}/>
                <Statistics text={"neutral"} count={neutral} />
                <Statistics text={"bad"} count={bad} />

            </div>
        </div>

    )
}

export default App;
