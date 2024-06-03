import React from 'react'

export default function GreenCounter({ className, title, Value }: Readonly<{ className: string, title: string, Value: React.ComponentType<any> }>) {
    return (
        <div className={`${className} w-max mx-auto`}>
            {title}
            <Value />
        </div>
    )
}
