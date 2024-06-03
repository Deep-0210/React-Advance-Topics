import React, { useState } from 'react'

const Children = ({ children }: any) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseTracker = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    return (
        <div onMouseMove={(e) => mouseTracker(e)}>
            {children(position)}
        </div>
    )
}

export default Children
