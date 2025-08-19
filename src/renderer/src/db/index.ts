import Database from "better-sqlite3";
import * as path from "path";
import * as fs from "fs";

// DB file ka path
const dbPath = path.join(__dirname, "iinvoice.db");

// agar file exist nahi hai to create ho jayega
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "");
}

export const db = new Database(dbPath);

// foreign keys enable karna important hai
db.pragma("foreign_keys = ON");
