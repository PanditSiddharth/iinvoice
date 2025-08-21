import React, { JSX, useState } from 'react'
import Header from '@renderer/components/Header'
import { IcChevron } from '@renderer/components/Icons'

type InputBoxProps = {
  placeholder: string
  value: string
  onChange: (val: string) => void
  type?: string
  className?: string
  className2?: string
  style?: React.CSSProperties
}

const InputBox = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  className = '',
  style, 
  className2 =""
}: InputBoxProps): JSX.Element => {
  const [focused, setFocused] = useState(false)

  const shouldFloat = focused || value.length > 0

  return (
    <div className={`relative ${className} `} style={{ ...style }}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full border rounded-md px-3 py-2 focus:outline-none ${className2}
          ${focused ? 'border-blue-500' : 'border-gray-300'} 
        `}
      />
      <label
        className={`
          absolute left-3 pointer-events-none
          transition-all duration-200
          ${
            shouldFloat
              ? '-top-2 text-sm px-1 bg-white text-blue-500'
              : 'top-1.5 text-base text-gray-400'
          }
        `}
      >
        {placeholder}
      </label>
    </div>
  )
}

const SelectBox = ({
  placeholder,
  value,
  onChange,
  className = '',
  className2 = '',
  style
}: Omit<InputBoxProps, 'type'>): JSX.Element => {
  const [focused, setFocused] = useState(false)

  const shouldFloat = focused || value.length > 0

  return (
    <div className={`relative ${className} `} style={{ ...style }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full border rounded-md px-3 py-[9px] focus:outline-none ${className2}
          ${focused ? 'border-blue-500' : 'border-gray-300'} 
        `}
      >
        <option value="v">Category</option>
        <option value="v1">Category2</option>
      </select>
      <label
        className={`
          absolute left-3 pointer-events-none
          transition-all duration-200 -top-2 text-sm px-1 bg-white
          ${shouldFloat ? 'text-blue-500' : 'text-gray-400'}
        `}
      >
        {placeholder}
      </label>
    </div>
  )
}

const AddItems = (): React.JSX.Element => {
  const [isService, setIsService] = useState(false)
  const [isOpenUnit, setIsOpenUnit] = useState(false)

  return (
    <div className="text-black fntlight">
      <Header />
      <div className="flex bg-gray-200 p-2" style={{ height: 'calc(100vh - 64px)' }}>
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

          <div
            style={{
              marginTop: '8px'
            }}
            className="flex gap-4"
          >
            <InputBox
              placeholder="Product Name"
              type="text"
              value=""
              onChange={() => {}}
              className="w-52"
            />

            <InputBox
              placeholder="HSN/SAC Code"
              type="text"
              value=""
              onChange={() => {}}
              className="w-52"
            />

            <button
              className="bg-sky-200 rounded-xl text-blue-700 w-52 relative"
              onClick={() => {
                setIsOpenUnit(true)
              }}
            >
              Select unit
              <div className="absolute  text-center right-1/2 pt-1 pl-3">pcs</div>
            </button>
            {isOpenUnit && (
              <div className="fixed h-screen w-full top-0 right-0 flex justify-center items-center">
                <div className="absolute w-full bg-gray-700 opacity-45 h-screen"></div>
                <div className="w-96 bg-white relative">
                  <div className="p-2 flex justify-between bg-gray-300 items-center">
                    <p
                      className="text-black"
                      style={{ color: 'black', fontWeight: 600, fontSize: 15 }}
                    >
                      Select Unit
                    </p>
                    <div onClick={() => setIsOpenUnit(false)}>
                      <IcChevron open={false} className="justify-self-end w-8" />
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 justify-center">
                    <div className="text-center">
                      <div className="text-blue-700 pt-3">Base Unit</div>
                      <select
                        name="first-unit"
                        id=""
                        className="text-black p-2 border border-gray-400 rounded-lg min-w-40"
                        style={{ marginTop: '2px' }}
                      >
                        <option value="pcs">None</option>
                        <option value="pcs">Pcs</option>
                        <option value="pcs">Box</option>
                        <option value="pcs">Centimeter</option>
                      </select>
                    </div>

                    <div className="text-center">
                      <div className="text-blue-700 pt-3">Secondary Unit</div>
                      <select
                        name="first-unit"
                        id=""
                        className="text-black p-2 border border-gray-400 rounded-lg min-w-40"
                        style={{ marginTop: '2px' }}
                      >
                        <option value="pcs">None</option>
                        <option value="pcs">Pcs</option>
                        <option value="pcs">Box</option>
                        <option value="pcs">Centimeter</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center pb-4 gap-4">
                    <div className="text-center">
                      <div className="text-blue-700 pt-3">Base Unit</div>
                      <input
                        type="number"
                        className="text-black p-2 border border-gray-400 rounded-lg min-w-40"
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-blue-700 pt-3">Secondary Unit</div>
                      <select
                        name="first-unit"
                        id=""
                        className="text-black p-2 border border-gray-400 rounded-lg min-w-40"
                        style={{ marginTop: '2px' }}
                      >
                        <option value="pcs">None</option>
                        <option value="pcs">Pcs</option>
                        <option value="pcs">Box</option>
                        <option value="pcs">Centimeter</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Second Input Row */}
          <div className="py-8 flex gap-4">
            <SelectBox placeholder="Category" value="" onChange={() => {}} className="w-52" />
                      <InputBox
              placeholder="Item Code"
              type="text"
              value=""
              onChange={() => {}}
              className="w-52"
            />
            <div className='flex items-center gap-4 text-gray-700'>
              <input type='checkbox' />
              Batch Tracking
            </div>
                        <div className='flex items-center gap-4 text-gray-700'>
              <input type='checkbox' />
              Serial No. Tracking
            </div>
          </div>

          <div className='border-b flex max-w-full text-gray-600 border-gray-300'>
            <div 
            className='p-2 border-b text-center border-red-800 text-red-800 w-28'
            style={{
              fontSize: 15
            }}>
              Pricing
            </div>
                        <div 
            className='p-2 text-center w-28 hover:cursor-pointer'
            style={{
              fontSize: 15
            }}>
              Stock
            </div>
            <div 
            className='p-2 text-center w-28 hover:cursor-pointer'
            style={{
              fontSize: 15
            }}>
              Item Image
            </div>
          </div>

          <div className='flex p-4'>
                      <InputBox
              placeholder="Item Code"
              type="text"
              value=""
              onChange={() => {}}
              className="w-28 "
              className2='rounded-none rounded-l-lg'
            />
            <SelectBox placeholder="" value="" onChange={() => {}} className="w-28" 
             className2='rounded-none rounded-r-lg'
            />
          </div>
        </div>
      </div>
      <h1>Add Item</h1>
    </div>
  )
}

export default AddItems
