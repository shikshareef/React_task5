import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    const ageDiff = today - birthDate;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  }

  return (
    <>
      <h1 className='text-4xl text-center font-bold mt-10'>Age Calculator</h1>
      <h3 className='text-2xl text-center font-bold mt-6'>Enter your birthdate</h3>
      <div className='p-2 flex justify-center mt-5'>
        <input id='birthDate' className='border border-solid border-black' type='date' />
      </div>
      <div className='flex justify-center'>
        <button onClick={calculateAge} className='bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded'>
          Calculate Age
        </button>
      </div>
      <h2 className='text-3xl text-center font-bold mt-5'>Your age is {age} years</h2>
    </>
  )
}

export default App
