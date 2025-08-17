import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  IcDashboard,
  IcChevron,
  IcPackage,
  IcShopping,
  IcFile,
  IcReceipt,
  IcWallet,
  IcBar,
  IcSettings,
  IcItem,
  IcParty,
  IcUnit,
  IcInvoice,
  IcEstimate,
  IcDelivery,
  IcCredit,
  IcPurchaseBill,
  IcPurchaseOrder,
  IcDebit
} from './Icons'

const menuConfig = [
  { label: 'Dashboard', icon: <IcDashboard />, to: '/' },
  {
    label: 'Masters',
    icon: <IcPackage />,
    submenu: [
      { label: 'Items', icon: <IcItem />, to: '/items' },
      { label: 'Parties', icon: <IcParty />, to: '/parties' },
      { label: 'Units', icon: <IcUnit />, to: '/units' },
      { label: 'Taxes', icon: <IcUnit />, to: '/taxes' }
    ]
  },
  {
    label: 'Sales',
    icon: <IcShopping />,
    submenu: [
      { label: 'Sales Invoice', icon: <IcInvoice />, to: '/sale-invoices' },
      { label: 'Estimate/Quotation', icon: <IcEstimate />, to: '/estimate' },
      { label: 'Delivery Challan', icon: <IcDelivery />, to: '/delivery-challan' },
      { label: 'Credit Note', icon: <IcCredit />, to: '/credit-note' }
    ]
  },
  {
    label: 'Purchase',
    icon: <IcFile />,
    submenu: [
      { label: 'Purchase Bill', icon: <IcPurchaseBill />, to: '/purchase-bill' },
      { label: 'Purchase Order', icon: <IcPurchaseOrder />, to: '/purchase-order' },
      { label: 'Debit Note', icon: <IcDebit />, to: '/debit-note' }
    ]
  },
  { label: 'Expenses', icon: <IcReceipt />, to: '/expenses' },
  { label: 'Cash & Bank', icon: <IcWallet />, to: '/cash-bank' },
  { label: 'Reports', icon: <IcBar />, to: '/reports' },
  { label: 'Settings', icon: <IcSettings />, to: '/settings' }
]

const Sidebar = ({
  setOpen
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}): React.JSX.Element => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  const toggleMenu = (label: string): void => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <nav
      className="text-white h-full flex flex-col px-4 overflow-y-auto"
      style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none' // IE 10+
      }}
    >
      <style>
        {`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="sticky top-0 left-0 bg-gray-800 py-2"></div>
      <div
        onClick={() => setOpen(false)}
        className="sticky top-0 left-0 flex items-center gap-2 mb-6 px-2 py-3 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-blue-900 transition-colors select-none w-fit bg-gray-800 "
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path
            d="M13 16l-5-5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-medium">Close Sidebar</span>
      </div>
      <div className="sticky top-0 left-0 bg-gray-800 py-1 border-b border-gray-400"></div>

      <div className="flex flex-col gap-1 flex-1 py-2">
        {menuConfig.map((menu) =>
          menu.submenu ? (
            <div key={menu.label}>
              <div
                className="cursor-pointer flex items-center justify-between px-3 py-2 rounded-md hover:bg-blue-800 transition-colors"
                onClick={() => toggleMenu(menu.label)}
              >
                <div className="flex items-center gap-3">
                  {menu.icon}
                  <span>{menu.label}</span>
                </div>
                <span className="text-gray-300">
                  <IcChevron open={!!openMenus[menu.label]} />
                </span>
              </div>
              <div
                className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${
                  openMenus[menu.label] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {menu.submenu.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.to}
                    className="pl-9 pr-3 py-1 text-gray-300 hover:text-white hover:bg-blue-800 rounded-md transition-colors flex gap-2 items-center"
                  >
                    {sub.icon}
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={menu.label}
              to={menu.to!}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-200 hover:bg-blue-800 transition-colors"
            >
              <span className="shrink-0">{menu.icon}</span>
              <span className="truncate">{menu.label}</span>
            </Link>
          )
        )}
      </div>

      <div className="sticky bottom-0 left-0 mt-4 pb-4 border-t pt-3 text-sm text-gray-400 z-10 bg-gray-800">
        <p>Version 1.0.0</p>
        <p>© 2025 Rajeshwari Sales</p>
      </div>
    </nav>
  )
}

export default Sidebar
