import { db } from './'

// 🧾 Customers Table
export function createCustomersTable(): void {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      gstin TEXT,               -- GST number
      pan TEXT,
      state TEXT,
      stateCode TEXT,           -- For GST compliance
      contactPerson TEXT,       -- Bill/Ship to person
      address TEXT,             -- Bill/Ship to address
      gstinForAddress TEXT,     -- Bill/Ship GSTIN
      stateForAddress TEXT,     -- Bill/Ship state
      stateCodeForAddress TEXT, -- Bill/Ship state code
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  ).run()
}


// 📦 Items Table
export function createItemsTable(): void {
  db.prepare(
    `
CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  sku TEXT, -- stock keeping unit
  description TEXT,
  unit TEXT DEFAULT 'pcs',
  price REAL NOT NULL,
  taxRate REAL DEFAULT 0, -- default GST rate for item
  hsnCode TEXT,
  stockQuantity REAL DEFAULT 0,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
  `
  ).run()
}

// 🧾 Invoices Table
export function createInvoicesTable(): void {
  db.prepare(
    `
CREATE TABLE IF NOT EXISTS invoices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoiceNumber TEXT UNIQUE NOT NULL,      -- Invoice number
  customerId INTEGER NOT NULL,             -- Main customer (ordering party)

  billToCustomerId INTEGER,                -- Reference to customers table
  shipToCustomerId INTEGER,                -- Reference to customers table

  invoiceDate TEXT NOT NULL,
  dueDate TEXT,
  dateOfSupply TEXT,                       -- Date of Supply
  placeOfSupply TEXT,                      -- Place of Supply
  workOrderNumber TEXT,                    -- Work Order No, if any
  reverseCharge TEXT DEFAULT 'N',          -- Y/N
  transportMode TEXT,
  vehicleNumber TEXT,
  state TEXT,                              -- Party state (redundant copy)
  amount REAL DEFAULT 0,                   -- Subtotal before tax/discount
  taxPercent REAL DEFAULT 0,               -- e.g. 18
  taxAmount REAL DEFAULT 0,
  discount REAL DEFAULT 0,
  totalAmount REAL DEFAULT 0,
  gstOnReverseCharge REAL DEFAULT 0,       -- If any
  description TEXT,
  notes TEXT,                              -- Extra notes
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (customerId) REFERENCES customers(id) ON DELETE CASCADE,
  FOREIGN KEY (billToCustomerId) REFERENCES customers(id) ON DELETE SET NULL,
  FOREIGN KEY (shipToCustomerId) REFERENCES customers(id) ON DELETE SET NULL
)
    `
  ).run()
}


// 🔗 Invoice Items (junction table)
export function createInvoiceItemsTable(): void {
  db.prepare(
    `
CREATE TABLE IF NOT EXISTS invoice_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoiceId INTEGER NOT NULL,
  itemId INTEGER, -- agar master item table se linked hai
  description TEXT, -- custom description bhi dal sakte
  quantity REAL NOT NULL,
  unit TEXT DEFAULT 'pcs', -- pcs, kg, box, etc
  price REAL NOT NULL, -- per unit price
  discount REAL DEFAULT 0, -- per item discount (amount ya % dono design pe depend)
  taxRate REAL DEFAULT 0, -- per item tax percentage (e.g. 18 for 18%)
  taxAmount REAL DEFAULT 0, -- calculated tax amount
  total REAL NOT NULL, -- (quantity * price) - discount + tax
  hsnCode TEXT, -- GST ke liye HSN/SAC code
  notes TEXT, -- line item note
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (invoiceId) REFERENCES invoices(id) ON DELETE CASCADE,
  FOREIGN KEY (itemId) REFERENCES items(id) ON DELETE SET NULL
)
  `
  ).run()
}

// 💰 Payments Table
export function createPaymentsTable(): void {
  db.prepare(
    `
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoiceId INTEGER,
  customerId INTEGER,
  date DATETIME NOT NULL,
  amount REAL NOT NULL,
  mode TEXT,                        -- cash, bank, UPI, card, cheque
  reference TEXT,                   -- transaction id / cheque no
  notes TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (invoiceId) REFERENCES invoices(id) ON DELETE SET NULL,
  FOREIGN KEY (customerId) REFERENCES customers(id) ON DELETE SET NULL
)
  `
  ).run()
}

// 🏭 Suppliers Table (optional)
export function createSuppliersTable(): void {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS suppliers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      address TEXT,
      gstNumber TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `
  ).run()
}

export function createExpensesTable(): void {
  db.prepare(
    `
        CREATE TABLE IF NOT EXISTS expenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date DATETIME NOT NULL,
  category TEXT,                   -- rent, electricity, transport
  description TEXT,
  amount REAL NOT NULL,
  paymentMode TEXT,
  reference TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
        `
  ).run()
}

export function createTaxesTable(): void {
  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS taxes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,             -- GST 5%, IGST 18%
  rate REAL NOT NULL,             -- percentage
  description TEXT
)

        `
  ).run()
}

// 🚀 Run all
export function createAllTables(): void {
  createCustomersTable()
  createItemsTable()
  createInvoicesTable()
  createInvoiceItemsTable()
  createPaymentsTable()
  createSuppliersTable()
  createExpensesTable()
  createTaxesTable()
}

createAllTables()
