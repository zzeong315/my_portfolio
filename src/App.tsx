import React from 'react';

function App() {
  return (
    <div className='bg-amber-50 w-full h-[100vh]'>
      <nav className='flex justify-between items-center h-20 px-12 bg-fuchsia-50'>
        <div>Home</div>
        <ul className='flex space-x-8'>
          <li>Project</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
