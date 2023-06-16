"use client"

import Image from 'next/image';
import { useRef, useState } from 'react'

function Login() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  }

  const handleShowPassword = () => {
    inputRef.current?.focus();
    toggleShowPassword();
  };
  return (
    <div className="w-full max-w-xs relative mt-10 mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input 
            type='text'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" 
            value={formData.username}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Image 
            src={'/magnifying-glass.svg'}
            alt='model-icon'
            width={25}
            height={25}
            className='w-[20px] h-[20px] absolute right-0'
            onClick={handleShowPassword}
          />
          <input
            ref={inputRef}
            className="shadow searchbar__input appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type={showPassword ? 'text' : 'password'} 
            value={formData.password}
            placeholder=''
            onChange={(event) => setFormData({ ...formData, password: event.target.value })}
          />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
           Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  )
}

export default Login