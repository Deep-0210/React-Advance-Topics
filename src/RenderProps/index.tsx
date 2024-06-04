import React from 'react'
import App from './BasicPropRender/index'
import Parent from './ChildrenPropRendering/Parent'
import Main from './HOCPropRender/Main'

const Index = () => {
    return (
        <div>
            {/* Basic Render props method */}
            <App render={(data: any) => <div>{data || 'Loading....'}</div>} />

            {/* Using function as children prop rendering */}
            <Parent />

            {/* Using HOC as a props */}
            <Main />
        </div>
    )
}

export default Index
