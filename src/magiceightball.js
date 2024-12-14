import React, {useState} from 'react'
import './magiceightball.css'

const magicalArray = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ] 
const randNum = ()=> {return Math.floor(Math.random() * magicalArray.length)}

const MagicEightBall = () =>{
    const[question, setQuestion] = useState('Think of a question')
    const[color, setColor] = useState('black')
    const invokeMagicBall = ()=>{
        let ran = randNum()
        setQuestion(magicalArray[ran].msg)
        setColor(magicalArray[ran].color)
        return 
    }
    const resetMagicBall = ()=>{
        setQuestion('Think of a question')
        setColor('black')
    }
        return (
        <>
        <button onClick={invokeMagicBall} style={{ backgroundColor: [color],
            fontSize: '50px',
            height: '600px',
            width: '600px',
            color: 'white'
        }}>
            { question} 
            </button> <br></br>
            <button onClick={resetMagicBall}>reset</button>
        </>
        )
}

export default MagicEightBall