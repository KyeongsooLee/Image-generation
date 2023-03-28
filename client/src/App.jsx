import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost, About } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex items-center space-x-4">
          <Link to ="/create-post" className="font-inter font-medium text-white bg-[#6469ff] px-4 py-2 rounded-md hover:bg-[#5054d6] transition-colors duration-300 ease-in-out">Create</Link>
          <Link to ="/About" className="font-inter font-medium text-white bg-[#6469ff] px-4 py-2 rounded-md hover:bg-[#5054d6] transition-colors duration-300 ease-in-out">About</Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App