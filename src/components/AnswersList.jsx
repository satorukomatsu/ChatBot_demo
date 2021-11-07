import React from 'react'
import { Answer } from './index'

const AnswersList = (props) => {
    return (
        <div className="c-grid__answer">
            {props.answers.map((value) => {
                return <Answer content={value.content} nextId={value.nextId} key={value.toString()} select={props.select}/>
            })}
        </div>
    )
}

export default AnswersList