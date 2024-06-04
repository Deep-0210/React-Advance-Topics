import React from 'react'

interface CounterTypes {
    title: string
    value: React.ComponentType<any>
    className: string
}

export default function RedCounter(props: Readonly<CounterTypes>) {
    return (
        <div className={`${props.className} w-max mx-auto`}>
            {props.title}

            <div className='flex gap-4'>
                <div>
                    <props.value />
                </div>
            </div>
        </div>
    )
}
