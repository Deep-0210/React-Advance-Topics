import React, { useRef } from 'react'

const UnControlledComponent = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const name = (nameRef.current as unknown as HTMLInputElement)?.value;
    const email = (emailRef.current as unknown as HTMLInputElement)?.value;

    if (name && email) {
      alert(`Name: ${name}, Email: ${email}`);
    }
  };
  return (
    <div className='bg-orange-700 w-max mx-auto p-4 rounded-md mt-20'>
      <form onSubmit={handleSubmit}>
        <div className='my-3'>
          <label>
            <span className='text-white'>Name:</span>
            <input type="text" ref={nameRef} className='ms-4 border border-white px-2 rounded-md h-8' placeholder='Name' />
          </label>
        </div>
        <div className='my-3'>
          <label>
            <span className='text-white'>Email:</span>
            <input type="email" ref={emailRef} className='ms-4 border border-white px-2 rounded-md h-8' placeholder='Email' />
          </label>
        </div>
        <div className='w-max mx-auto mt-5 mb-4'>
          <button type="submit" className='bg-green-700 rounded-lg p-2'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UnControlledComponent
