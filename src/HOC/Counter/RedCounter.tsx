import React from 'react'

export default function RedCounter(props:any) {
    return (
        <div className={`${props.className} w-max mx-auto`}>
            {props.title}
            <props.value />
        </div>
    )
}
