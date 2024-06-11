import React, { useEffect, useState } from 'react'

const ErrorHandling = () => {
    const [data, setData] = useState()
    const [error, setError] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error:any) {
                setError(error.toString());
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}

            {
                error && <div>{error}</div>
            }
        </div>
    )
}

export default ErrorHandling
