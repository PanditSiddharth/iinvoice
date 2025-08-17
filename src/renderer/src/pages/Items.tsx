import Header from '@renderer/components/Header'

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
  return (
    <div className="min-h-screen bg-gray-200">
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
        <div className="w-64 text-black bg-white m-2" style={{ height: 'calc(100vh - 120px)' }}>
          {items?.map((item: Partial<Item>) => (
            <div key={item.id!}>{item.name!}</div>
          ))}
        </div>

        <div className="flex flex-col h-screen gap-2 text-black w-full m-2">
          {/* Auto height */}
          <div className="bg-white p-4 ">
            <div className=" flex justify-between">
              <p style={{fontWeight: 600}}>DFSD</p>
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
          <div className="flex-1 bg-white overflow-auto">Scrollable / Remaining area</div>
        </div>
      </div>
    </div>
  )
}

export default ItemsPage
