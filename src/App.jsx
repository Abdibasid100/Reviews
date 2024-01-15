import { useState } from 'react';
import './App.css';
import Reviews from './Reviews';

function App() {

   return (
    <main>
      <section>
        <div>
          <h1 className='text-black font-bold'>Our Reviews</h1>
          <div className='w-[100px] h-2 bg-blue-400 mx-auto mt-5 rounded-2xl'></div>
        </div>
        <div className='mt-6'>
          <Reviews/>
        </div>
      </section>
    </main>
  )
}

export default App
