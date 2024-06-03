import React from 'react'
import Counter from './Counter/Counter'
import RedCounter from './Counter/RedCounter'
import GreenCounter from './Counter/GreenCounter'

const Hoc = () => {
    return (
        <div>
            <RedCounter title="Red Counter" className={'text-red-700 font-semibold'} value={Counter}/>
            <GreenCounter title="Green Counter" className={'text-green-700 font-semibold my-5'} Value={Counter} />
        </div>
    )
}

export default Hoc
