import React from 'react'
import Children from './Children'

const App = () => {
    return (
        <div>
            <Children >
                {(x: any) => {
                    return (
                        <div>
                            The mouse position is (X:{x?.x} || Y:{x?.y})
                        </div>
                    )
                }}
            </Children>
        </div>
    )
}

export default App
