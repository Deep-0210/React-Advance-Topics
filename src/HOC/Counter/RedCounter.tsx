import React from 'react'

export default function RedCounter(props:any) {
    return (
        <div className={`${props.className}`}>
            {props.title}
            <props.value />
        </div>
    )
}
