import React, { useCallback, useState } from 'react'

const ReactCallBack = () => {
    const [count, setCount] = useState<number>(0)

    const increment = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
    return (
        <div>
            Count:{count}
            <button className='border-2 border-green-700 p-2' onClick={increment}>Increment</button>
        </div>
    )
}

export default ReactCallBack