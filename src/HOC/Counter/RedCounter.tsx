import React from 'react'

interface CounterTypes {
    title: string
    className: string
}


const RedCounterHOC = (WrappedComponent:React.ComponentType) => {
  return function RedCounterComponent({ title, className }:CounterTypes) {
    return (
      <div className={`${className} w-max mx-auto`}>
        {title}
        <div className='flex gap-4'>
          <div>
            <WrappedComponent />
          </div>
        </div>
      </div>
    );
  };
};

export default RedCounterHOC;

