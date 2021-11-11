import React from 'react'
import './buttonNew.css'

export default function ButtonNew(props) {
    return (
        <div className="button-block">
            <span className="button">{props.texto}</span>
        </div>
    )
}
