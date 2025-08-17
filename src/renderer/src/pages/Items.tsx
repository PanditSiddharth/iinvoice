import Header from '@renderer/components/Header'
import { FilterIcon, IcPlus, IcSearch, MoreVerticalIcon } from '@renderer/components/Icons'
import FullscreenToggle from '@renderer/components/toggleFullScreen'
import React, { useRef } from 'react'

// ===================== TypeScript Types =====================
export type Unit = 'PCS' | 'KG' | 'LTR' | 'BOX'

export interface Item {
  id: number | string
  name: string
  sku: string
  hsn: string
  unit: Unit
  category: string
  purchasePrice: number
  salePrice: number
  gst: number
  openingStock: number
  lowStock: number
}

export type SortField = keyof Item
export type SortOrder = 'asc' | 'desc'
export type StockFilter = 'ALL' | 'LOW' | 'OUT'

const items: Partial<Item>[] = [
  { id: 21, name: 'Item 1' },
  { id: 22, name: 'Item 2' },
  { id: 23, name: 'Item 3' },
  { id: 24, name: 'Item 4' }
]
// ===================== Main Component =====================
const ItemsPage: React.FC = () => {
  let itemsBgColor: string = 'bg-white'
  const getBgColor = (): string => {
    if (itemsBgColor == 'bg-white') {
      itemsBgColor = 'bg-gray-100'
      return 'bg-white'
    } else {
      itemsBgColor = 'bg-white'
      return 'bg-gray-100'
    }
  }

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-gray-200 fntlight">
      {/* Header */}
      <div className="pt-3 px-3 bg-gray-50">
        <Header />
      </div>

      {/* Items Type */}
      <div
        className="text-gray-400 bg-white flex justify-evenly shadow-sm "
        style={{
          fontWeight: 800,
          fontFamily: 'Inter, sans-serif'
        }}
      >
        <div
          className="w-full text-center font-bold py-3 border-b"
          style={{
            fontWeight: 800,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          PRODUCTS
        </div>
        <div
          className="w-full text-center font-bold py-3"
          style={{
            fontWeight: 800,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          SERVICES
        </div>
        <div
          className="w-full text-center py-3"
          style={{
            fontWeight: 800,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          CATEGORY
        </div>
        <div
          className="w-full text-center py-3"
          style={{
            fontWeight: 800,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          UNITS
        </div>
      </div>
      <div className="max-w-full p-2 flex gap-2">
        {/* Items List */}
        <div
          className="min-w-64 w-80 text-black bg-white p-2"
          style={{ height: 'calc(100vh - 120px)' }}
        >
          <div className="flex justify-between items-center py-2 ">
            <IcSearch className="w-8 bg-gray-200 p-2 rounded-full" />
            <div className="flex items-center">
              <button className="flex w-28 rounded-lg p-1 bg-orange-400 justify-center items-center text-white">
                <IcPlus className="w-3.5" />
                Add Item
              </button>
              <MoreVerticalIcon className="w-5" />
            </div>
          </div>

          <div className="text-gray-700 flex justify-between items-center bg-gray-100 py-1">
            <div>ITEM</div>
            <div className="flex gap-2 items-center">
              <FilterIcon />
              <div>QUANTITY</div>
            </div>
          </div>

          {/* Items List */}
          <div>
            {items?.map((item: Partial<Item>) => (
              <div key={item.id!} className={'flex justify-between items-center ' + getBgColor()}>
                <div>{item.name!}</div>
                <div className="flex font-light gap-3 items-center">
                  <div className="text-sm text-red-400">-52</div>
                  <MoreVerticalIcon className="w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-screen gap-2 text-black w-full m-2">
          {/* Auto height */}
          <div className="bg-white p-4 ">
            <div className=" flex justify-between">
              <p style={{ fontWeight: 600 }}>DFSD</p>
              <button className="bg-blue-500 p-2 rounded-lg text-white">Adjust Item</button>
            </div>
            <div className="flex justify-between">
              <p>
                Sale Price: <span className="text-green-600">{'₹20.2'}</span> (excl)
              </p>

              <p>
                Stock Quantity: <span className="text-green-600">{'₹20.2'}</span> (excl)
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                Purchase Price: <span className="text-green-600">{'₹20.2'}</span> (excl)
              </p>

              <p>
                Stock Value: <span className="text-green-600">{'₹20.2'}</span> (excl)
              </p>
            </div>
          </div>

          {/* Remaining height */}
          <div className="flex-1 bg-white overflow-auto p-2" ref={containerRef}>
            <div className="flex justify-between items-center">
              <div className="font-bold" style={{ fontWeight: 500, fontSize: 14 }}>
                TRANSACTIONS
              </div>

              <div className="flex gap-2 items-center">
                <div className="relative w-1/4 min-w-44">
                  <IcSearch className="w-4 h-4 text-gray-600 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    placeholder="Search Transactions"
                    className="pl-8 pr-3 py-1 rounded-3xl w-full placeholder-gray-400 border border-gray-300"
                  />
                </div>

                <FullscreenToggle containerRef={containerRef} />
              </div>
            </div>

            <div></div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsPage
