import React, { useEffect } from 'react'
import { UserErrorBoundary } from './context'

const ErrorBoundary = ({ children }: any) => {
    const { error, resetError }: any = UserErrorBoundary()

    if (error) {
        return (
            <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {error.toString()}
                </details>
                <button onClick={resetError}>Try again</button>
            </div>
        );
    }
    return children;
}

export default ErrorBoundary
