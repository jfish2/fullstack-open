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
    const [avgScore, setAvgScore] = useState(0)
    const [percentagePosFeedback, setPercentagePosFeedback] = useState(0)

    const handleGoodClicks = () => {
        const newGood = good + 1
        setGood(newGood)
        const newTotal = newGood + bad + neutral
        setTotalClicks(newTotal)
        setAvgScore(((newGood) - bad)/newTotal )
        setPercentagePosFeedback(newGood / newTotal)
    }

    const handleNeutralClicks = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
        const newTotal = newNeutral + bad + good
        setTotalClicks(newTotal)
        setAvgScore(((good) - bad)/newTotal )
        setPercentagePosFeedback(good / newTotal)
    }

    const handleBadClicks = () => {
        const newBad = bad + 1
        setBad(newBad)
        const newTotal = newBad + good + neutral
        setTotalClicks(newTotal)
        setAvgScore(((good) - newBad)/newTotal )
        setPercentagePosFeedback(good / newTotal)
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
                <Statistics text={"all"} count={totalClicks} />
                <Statistics text={"averageScore"} count={avgScore} />
                <Statistics text={"positiveFeedback"} count={Number(percentagePosFeedback).toLocaleString('en',{style: 'percent', minimumFractionDigits:2})} />

            </div>
        </div>

    )
}

export default App;
