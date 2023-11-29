// Example login form component
import { useState } from 'react';
import { signIn, useSession } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data } = useSession();
  console.log(data)
  const handleLogin = async () => {
    try {
      // Use the signIn function to authenticate the user
      const result = await signIn('credentials', {
        redirect: false, 
        email,
        password,
      });
      if (result?.error) {
        console.error('Authentication failed:', result.error);
      } else {
        console.log('Authentication successful:', data);
      }
    } catch (error) {
      console.error('An error occurred during authentication:', error);
    }
  };

  return (
    <div className='h-screen w-full bg-gray-100 p-5 flex justify-center items-center'>
    <form className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <label className="block mb-2" htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <label className="block mb-2" htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <button
        type="button"
        onClick={handleLogin}
      
        className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md focus:outline-none hover:bg-green-600 disabled:bg-gray-400"
      >
      Submit
      </button>
    </form>
    </div>
  )
}
