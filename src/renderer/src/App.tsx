import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import SaleInvoices from './pages/SaleInvoices'
import ItemsPage from './pages/Items'
import AddItems from './pages/AddItems'

function App(): React.JSX.Element {
  const [isOpen, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex min-w-screen min-h-screen bg-white">
        {/* Sidebar */}
        <div
          className={`bg-gray-800 h-screen transition-all duration-300 ease-in-out overflow-hidden`}
          style={{
            width: isOpen ? '20%' : '0px',
            minWidth: isOpen ? '250px' : '0px'
          }}
        >
          {isOpen && <Sidebar setOpen={setOpen} />}
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-300 ease-in-out`}
          style={{
            width: isOpen ? '80%' : '100%'
          }}
        >
          {/* Button to open sidebar */}
          <div
            className={
              'top-1/2 left-1 rounded-lg p-2 items-center justify-center z-20' +
              (isOpen ? ' hidden' : ' fixed')
            }
            onClick={() => setOpen(true)}
          >
            <svg
              color="white"
              fill="#555555"
              stroke="gray"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sale-invoices" element={<SaleInvoices />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/add-items" element={<AddItems />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
