import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import ErrorPronComponent from './ErrorPronComponent'
import Context from './context'

const Main = () => {
    return (
        <div>
            <Context>
                <ErrorBoundary>
                    <ErrorPronComponent />
                </ErrorBoundary>
            </Context>
        </div>
    )
}

export default Main
