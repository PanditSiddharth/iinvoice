import { IcSearch } from './Icons'

const Header = (): React.JSX.Element => {
  return (
    <div className="flex justify-between items-center p-4 px-4 bg-gray-50">
      <div className="relative w-1/4 min-w-44">
        <IcSearch className="w-4 h-4 text-gray-600 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          placeholder="Search Transactions"
          className="pl-8 pr-3 py-1 rounded-3xl w-full placeholder-gray-400"
        />
      </div>
      <div
        className="flex gap-2 px-4 font-extrabold"
        style={{ fontWeight: 900, fontFamily: 'Inter, sans-serif' }}
      >
        <button className="text-red-500 px-4 py-1 rounded-full flex items-center gap-1 bg-red-100 font-extrabold">
          <p style={{ fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>+ Add Sale</p>
        </button>
        <button
          style={{ fontWeight: 700, fontFamily: 'Inter, sans-serif' }}
          className="bg-blue-100 text-blue-500 px-4 py-1 rounded-full flex items-center gap-1 font-extrabold"
        >
          + Add Purchase
        </button>
      </div>
    </div>
  )
}

export default Header
