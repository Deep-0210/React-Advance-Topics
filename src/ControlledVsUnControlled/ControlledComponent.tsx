import React, { useState } from 'react'

const ControlledComponent = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value
    setName(value);
  };

  const handleEmailChange = (event: React.ChangeEvent) => {
    const value = (event.target as HTMLInputElement)?.value
    setEmail(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
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
            <input type="text" value={name} onChange={handleNameChange} className='ms-4 border border-white px-2 rounded-md h-8' placeholder='Name' />
          </label>
        </div>
        <div className='my-3'>
          <label>
            <span className='text-white'>Email:</span>
            <input type="email" value={email} onChange={handleEmailChange} className='ms-4 border border-white px-2 rounded-md h-8' placeholder='Email' />
          </label>
        </div>
        <div className='w-max mx-auto mt-5 mb-4'>
          <button type="submit" className='bg-green-700 rounded-lg p-2'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ControlledComponent
