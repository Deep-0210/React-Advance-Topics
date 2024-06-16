import React, { Suspense } from 'react'
const OtherComponent = React.lazy(() => import('./OtherComponent'))
const AnotherComponent = React.lazy(() => import('./AnotherComponent'))

const ReactLazyLoading = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading.....</div>}>
                <section>
                    <OtherComponent />
                    <AnotherComponent />
                </section>
            </Suspense>
        </div>
    )
}

export default ReactLazyLoading
