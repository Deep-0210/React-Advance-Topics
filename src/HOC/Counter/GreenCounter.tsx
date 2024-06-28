import React from 'react'

interface CounterTypes {
    title: string
    className: string
}

export default function GreenCounterHOC(WrappedComponent: React.ComponentType) {
    return function GreenCounter({ title, className }: CounterTypes) {
        return (
            <div className={`${className} w-max mx-auto`}>
                {title}
                <WrappedComponent />
            </div>
        )
    }
}
