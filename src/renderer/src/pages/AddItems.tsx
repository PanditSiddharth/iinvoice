import React, { JSX, useState } from 'react'
import Header from '@renderer/components/Header'

type VyaparInputProps = {
  placeholder: string
  value: string
  onChange: (val: string) => void
  type?: string
}

const VyaparInput = ({ placeholder, value, onChange, type = 'text' }: VyaparInputProps): JSX.Element => {
  const [focused, setFocused] = useState(false)

  const shouldFloat = focused || value.length > 0

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full border rounded-md px-3 py-3 focus:outline-none
          ${focused ? 'border-blue-500' : 'border-gray-300'}
        `}
      />
      <label
        className={`
          absolute left-3 pointer-events-none
          transition-all duration-200
          ${shouldFloat
            ? '-top-2 text-sm px-1 bg-white text-blue-500'
            : 'top-3 text-base text-gray-400'}
        `}
      >
        {placeholder}
      </label>
    </div>
  )
}



const AddItems = (): React.JSX.Element => {
  const [isService, setIsService] = useState(false)

  return (
    <div className="text-black fntlight">
      <Header />
      <div
        className="flex bg-gray-200 p-2"
        style={{ height: 'calc(100vh - 64px)' }}
      >
        <div className="flex-1 bg-white py-1 px-2">
          <div className="flex items-center gap-2">
            <p
              className="text-lg pr-6"
              style={{ fontWeight: 500, fontSize: '18px', fontFamily: 'Inter, sans-serif' }}
            >
              Add Item
            </p>

            <p>Product</p>

            {/* Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isService}
                onChange={() => setIsService(!isService)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 transition-all" />
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
            </label>

            <p>Service</p>
          </div>

          <VyaparInput placeholder='Hi' type='text' value='' onChange={()=>{}}/>
        </div>
      </div>
      <h1>Add Item</h1>
    </div>
  )
}

export default AddItems
