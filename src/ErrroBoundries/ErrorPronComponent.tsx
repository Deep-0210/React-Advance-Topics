import React, { useEffect } from 'react'
import { UserErrorBoundary } from './context'

const ErrorPronComponent = () => {
    const { setError, setData, data }: any = UserErrorBoundary()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result);
            }
            catch (error) {
                setError(error);
            }
        }

        fetchData()
    }, []);

    return (
        <>
            <div>This is an error-prone component.</div>
            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </>
    );
}

export default ErrorPronComponent
