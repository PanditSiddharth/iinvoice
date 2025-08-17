import { useEffect, useRef, useState } from 'react'
import {
  IcSearch,
  IcFileText,
  IcPrinter,
  IcBarChart3,
  IcSettings,
  FilterIcon,
  PrintIcon,
  ShareIcon,
  MoreVerticalIcon,
  FullScreenIcon,
  ExitFullScreenIcon
} from '../components/Icons'
import Header from '@renderer/components/Header'

type Transaction = {
  date: string
  invoice: string
  party: string
  transaction: string
  payment: string
  amount: number
  balance: number
}

// मान लें कि ये आइकॉन कंपोनेंट्स कहीं और से इम्पोर्ट किए गए हैं
// import { FullScreenIcon, ExitFullScreenIcon } from './YourIcons';

// 1. स्टेट का उपयोग करके फुलस्क्रीन मोड को ट्रैक करें

export default function SaleInvoices(): React.JSX.Element {
  const [transactions] = useState<Transaction[]>([
    {
      date: '2025-08-01',
      invoice: 'INV-001',
      party: 'Sharma Traders',
      transaction: 'Sale',
      payment: 'Cash',
      amount: 1200,
      balance: 1200
    },
    {
      date: '2025-08-02',
      invoice: 'INV-002',
      party: 'Gupta Electronics',
      transaction: 'Purchase',
      payment: 'Bank Transfer',
      amount: 8500,
      balance: -7300
    },
    {
      date: '2025-08-03',
      invoice: 'INV-003',
      party: 'Mishra Store',
      transaction: 'Sale',
      payment: 'UPI',
      amount: 4200,
      balance: -3100
    },
    {
      date: '2025-08-04',
      invoice: 'INV-004',
      party: 'Verma Distributors',
      transaction: 'Purchase',
      payment: 'Cheque',
      amount: 15000,
      balance: -18100
    },
    {
      date: '2025-08-05',
      invoice: 'INV-005',
      party: 'Agarwal Mart',
      transaction: 'Sale',
      payment: 'Cash',
      amount: 6000,
      balance: -12100
    },
    {
      date: '2025-08-06',
      invoice: 'INV-006',
      party: 'Kumar Agencies',
      transaction: 'Purchase',
      payment: 'UPI',
      amount: 4500,
      balance: -16600
    },
    {
      date: '2025-08-07',
      invoice: 'INV-007',
      party: 'Singh Hardware',
      transaction: 'Sale',
      payment: 'Bank Transfer',
      amount: 7800,
      balance: -8800
    },
    {
      date: '2025-08-08',
      invoice: 'INV-008',
      party: 'Patel Textiles',
      transaction: 'Purchase',
      payment: 'Cash',
      amount: 3200,
      balance: -12000
    },
    {
      date: '2025-08-09',
      invoice: 'INV-009',
      party: 'Mehta Electronics',
      transaction: 'Sale',
      payment: 'Cheque',
      amount: 9500,
      balance: -2500
    },
    {
      date: '2025-08-10',
      invoice: 'INV-010',
      party: 'Chopra Foods',
      transaction: 'Purchase',
      payment: 'Bank Transfer',
      amount: 5200,
      balance: -7700
    }
  ])

  const [isFullscreen, setIsFullscreen] = useState(false)

  const containerRef = useRef(null) // 'tt' एलिमेंट के लिए
  const innerContentRef = useRef(null) // 'innerTT' एलिमेंट के लिए

  useEffect(() => {
    const handleFullscreenChange = (): void => {
      const isCurrentlyFullscreen = document.fullscreenElement !== null
      setIsFullscreen(isCurrentlyFullscreen)

      // स्टाइल को भी यहीं अपडेट करें
      if (innerContentRef.current) {
        ;(innerContentRef.current as HTMLElement).style.maxHeight = isCurrentlyFullscreen
          ? '100vh'
          : 'calc(100vh - 360px)'
      }
    }

    // इवेंट लिस्नर जोड़ें
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    // कंपोनेंट के अनमाउंट होने पर लिस्नर को हटा दें (मेमोरी लीक से बचने के लिए)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const goFullscreen = (): void => {
    if (containerRef.current) {
      ;(containerRef.current as { requestFullscreen: () => '' }).requestFullscreen!()
    }
  }

  // फुलस्क्रीन से बाहर आने का फंक्शन
  const exitFullscreen = (): void => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  let bgc: string = 'bg-gray-100'
  return (
    <div
      className="py-4 bg-gray-50 min-h-screen text-black h-screen "
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
{/* Header */}
<Header />
      <div className="flex flex-row justify-between items-center mb-4 bg-white p-1 shadow-sm">
        <select className="px-3 py-2 rounded-md text-lg w-1/4 ">
          <option>Sale Invoices</option>
          <option>All Transactions</option>
        </select>
        <div className="flex justify-end items-center gap-4 px-4">
          <button
            style={{ fontWeight: 700, fontFamily: 'Inter, sans-serif' }}
            className="bg-red-500 px-4 py-1 rounded-full flex items-center gap-1 text-white font-extrabold"
          >
            + Add Sale
          </button>
          <div className="border-r border-gray-500 border-2 h-5 mx-4"></div>
          <IcSettings />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col gap-1 p-1">
        {/* Filters */}
        <div className="bg-white px-3 py-2 rounded-lg shadow-sm flex flex-wrap gap-3 mb-4 items-center">
          <div>Filter By: </div>
          <div className="flex gap-2 items-center bg-blue-100 rounded-full text-gray-700">
            <select className="px-3 py-1 rounded-md">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
            <input type="date" defaultValue="2025-08-01" className="px-3 py-1 rounded-md" />
            to
            <input type="date" defaultValue="2025-08-31" className="px-3 py-1 rounded-md" />
          </div>
          <div className="flex gap-2 items-center bg-blue-100 rounded-full text-gray-700">
            <select className="px-3 py-1 rounded-md">
              <option>All Firms</option>
            </select>
          </div>
        </div>

        {/* Sales Summary */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4 text-gray-500">
          <div className="bg-red-50 flex flex-col p-4 w-72 rounded-xl shadow-sm">
            <p className="text-sm ">Total Sales Amount</p>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">₹0</h2>
              {/* <span className="text-xs bg-gray-100 px-2 py-1 rounded">0% ↑ vs last month</span> */}
            </div>
            <p className="text-sm pt-2">Received: ₹0 | Balance: ₹0</p>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden" id="tt" ref={containerRef}>
          <div className="flex justify-between items-center px-4">
            <span className="font-bold text-gray-600">Transactions</span>
            <span className="flex justify-end gap-2 p-2 border-b">
              <IcSearch className="w-5 h-5 cursor-pointer text-gray-600" />
              <IcBarChart3 className="w-5 h-5 cursor-pointer text-gray-600" />
              <IcFileText className="w-5 h-5 cursor-pointer text-green-600" />
              <IcPrinter className="w-5 h-5 cursor-pointer text-gray-600" />
              {!isFullscreen ? (
                <FullScreenIcon
                  className="w-5 h-5 cursor-pointer text-gray-600"
                  onClick={() => goFullscreen()}
                />
              ) : (
                <ExitFullScreenIcon
                  className="w-5 h-5 cursor-pointer text-gray-600"
                  onClick={() => exitFullscreen()}
                />
              )}
            </span>
          </div>
          <div
            className="overflow-y-auto "
            id="innerTT"
            ref={innerContentRef}
            style={{ maxHeight: 'calc(100vh - 360px)' }}
          >
            <table className="w-full text-sm">
              <thead className="bg-gray-100 sticky top-0 left-0 z-10 w-full">
                <tr>
                  {[
                    { name: 'Date', css: '' },
                    { name: 'Invoice no', css: '' },
                    { name: 'Party Name', css: '' },
                    { name: 'Transaction', css: ' hidden md:table-cell' },
                    { name: 'Payment Type', css: ' hidden md:table-cell' },
                    { name: 'Amount', css: '' },
                    { name: 'Balance', css: '' },
                    { name: 'Actions', css: '' }
                  ].map((col) => (
                    <th key={col.name} className={'p-2 text-left' + col.css}>
                      <div className="flex items-center gap-2">
                        <FilterIcon /> {col.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-500">
                      <div className="flex flex-col items-center">
                        <span className="text-red-400 text-lg">⚠</span>
                        <p>No Transaction Found</p>
                        <small>We could not find any transactions.</small>
                      </div>
                    </td>
                  </tr>
                ) : (
                  transactions.map((t, idx) => {
                    if (bgc === 'bg-white') bgc = 'bg-gray-100'
                    else bgc = 'bg-white'

                    return (
                      <tr key={idx} className={bgc + ' hover:bg-blue-200'}>
                        <td className="p-2">{t.date}</td>
                        <td className="p-2">{t.invoice}</td>
                        <td className="p-2 hidden md:table-cell">{t.party}</td>
                        <td className="p-2 hidden md:table-cell">{t.transaction}</td>
                        <td className="p-2">{t.payment}</td>
                        <td className="p-2">₹{t.amount}</td>
                        <td className="p-2">₹{t.balance}</td>
                        <td className="p-2">
                          <div className="flex justify-end gap-3">
                            <PrintIcon fill="white" color="gray" />
                            <ShareIcon color="gray" className="hidden md:flex" />
                            <MoreVerticalIcon
                              color="gray"
                              onClick={() => {
                                alert('Clicked')
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
