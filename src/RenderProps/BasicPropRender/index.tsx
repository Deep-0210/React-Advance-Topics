import React, { useEffect, useState } from 'react'

const Index = ({ render }: any) => {
    const [data, setData] = useState<string>('')

    useEffect(() => {
        setTimeout(() => {
            setData("Fetched Data")
        }, 1000)

    })
    return (
        <div>
            {render(data)}
        </div>
    )
}

export default Index
