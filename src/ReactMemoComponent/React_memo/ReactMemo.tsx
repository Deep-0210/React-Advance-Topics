import React from 'react'

const ReactMemo = React.memo(({ prop1, prop2 }: { prop1: string, prop2: string }) => {
    console.log("Rendering ReactMemo component")
    return (
        <div>
            {prop1} {prop2}
        </div>
    )
})

export default ReactMemo
