import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Home, Details, Illustrations, ProjectBracket, WrittenContent, Navbar } from './pages'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/writtenContent' element={<WrittenContent />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path='/projectBracket' element={<ProjectBracket />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App