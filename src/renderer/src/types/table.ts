// Customers Table
export type Customer = {
  id: number
  name: string
  phone?: string
  email?: string
  gstin?: string
  pan?: string
  state?: string
  stateCode?: string
  contactPerson?: string
  address?: string
  gstinForAddress?: string
  stateForAddress?: string
  stateCodeForAddress?: string
  createdAt: string // DATETIME stored as ISO string
}

// Items Table
export type Item = {
  id: number
  name: string
  sku?: string
  description?: string
  unit?: string
  price: number
  taxRate?: number
  hsnCode?: string
  stockQuantity?: number
  createdAt: string
  updatedAt: string
}

// Invoices Table
export type Invoice = {
  id: number
  invoiceNumber: string
  customerId: number
  billToCustomerId?: number
  shipToCustomerId?: number
  invoiceDate: string
  dueDate?: string
  dateOfSupply?: string
  placeOfSupply?: string
  workOrderNumber?: string
  reverseCharge?: 'Y' | 'N'
  transportMode?: string
  vehicleNumber?: string
  state?: string
  amount?: number
  taxPercent?: number
  taxAmount?: number
  discount?: number
  totalAmount?: number
  gstOnReverseCharge?: number
  description?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

// Invoice Items Table (junction)
export type InvoiceItem = {
  id: number
  invoiceId: number
  itemId?: number
  description?: string
  quantity: number
  unit?: string
  price: number
  discount?: number
  taxRate?: number
  taxAmount?: number
  total: number
  hsnCode?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

// Payments Table
export type Payment = {
  id: number
  invoiceId?: number
  customerId?: number
  date: string
  amount: number
  mode?: string
  reference?: string
  notes?: string
  createdAt: string
}

// Suppliers Table
export type Supplier = {
  id: number
  name: string
  phone?: string
  email?: string
  address?: string
  gstNumber?: string
  createdAt: string
}

// Expenses Table
export type Expense = {
  id: number
  date: string
  category?: string
  description?: string
  amount: number
  paymentMode?: string
  reference?: string
  createdAt: string
}

// Taxes Table
export type Tax = {
  id: number
  name: string
  rate: number
  description?: string
}
