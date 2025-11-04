
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
         <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/navbar" element={<Navbar />} />
      
            </Routes>
          </div>
        </BrowserRouter>

    </>
  )
}

export default App
