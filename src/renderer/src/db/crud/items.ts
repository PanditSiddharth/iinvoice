import { db } from '../'
import { Item } from '@renderer/types/table'


// Create a new item
export function createItem(data: Omit<Item, 'id' | 'createdAt' | 'updatedAt'>): Item {
  const stmt = db.prepare(`
    INSERT INTO items (name, sku, description, unit, price, taxRate, hsnCode, stockQuantity)
    VALUES (@name, @sku, @description, @unit, @price, @taxRate, @hsnCode, @stockQuantity)
  `)
  const info = stmt.run(data)
  return getItem(info.lastInsertRowid as number)!
}

// Get a single item by id
export function getItem(id: number): Item | undefined {
  return db.prepare(`SELECT * FROM items WHERE id = ?`).get(id)
}

// Get all items (optionally with a filter)
export function getAllItems(filter?: Partial<Item>): Item[] {
  let query = 'SELECT * FROM items'
  const keys = filter ? Object.keys(filter) : []
  if (keys && keys.length) {
    query += ' WHERE ' + keys.map(k => `${k} = @${k}`).join(' AND ')
  }
  return db.prepare(query).all(filter || {})
}

// Update a single item
export function updateItem(id: number, data: Partial<Omit<Item, 'id' | 'createdAt' | 'updatedAt'>>): Item | undefined {
  const keys = Object.keys(data)
  if (!keys.length) return getItem(id)

  const setClause = keys.map(k => `${k} = @${k}`).join(', ')
  db.prepare(`UPDATE items SET ${setClause}, updatedAt = CURRENT_TIMESTAMP WHERE id = @id`).run({ ...data, id })
  return getItem(id)
}

// Update many items by ids
export function updateManyItems(ids: number[], data: Partial<Omit<Item, 'id' | 'createdAt' | 'updatedAt'>>): number {
  if (!ids.length) return 0
  const keys = Object.keys(data)
  if (!keys.length) return 0
  const setClause = keys.map(k => `${k} = @${k}`).join(', ')
  const stmt = db.prepare(`UPDATE items SET ${setClause}, updatedAt = CURRENT_TIMESTAMP WHERE id IN (${ids.join(',')})`)
  const info = stmt.run(data)
  return info.changes
}

// Delete a single item
export function deleteItem(id: number): boolean {
  const info = db.prepare(`DELETE FROM items WHERE id = ?`).run(id)
  return info.changes > 0
}

// Delete multiple items by ids
export function deleteManyItems(ids: number[]): number {
  if (!ids.length) return 0
  const stmt = db.prepare(`DELETE FROM items WHERE id IN (${ids.join(',')})`)
  const info = stmt.run()
  return info.changes
}
