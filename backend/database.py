import sqlite3

conn = sqlite3.connect('notes.db', check_same_thread=False)
conn.row_factory = sqlite3.Row
c = conn.cursor()

# CREATE A TABLE FOR THE TASKS INFO
c.execute("""CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT, head TEXT, body TEXT)""")

# READ NOTES
def read_notes():
 c.execute("SELECT * FROM notes")
 return c.fetchall()

# CREATE NOTES
def add_note(heading, body):
 with conn:
  c.execute("INSERT INTO notes(head, body) VALUES (?,?)", (heading, body))

# DELETE NOTES
def delete_note(id):
 with conn:
  c.execute("DELETE FROM notes WHERE id=?", (id,))

# SEARCH NOTES
def search_note(keyword):
 query = f"%{keyword}%"
 c.execute("SELECT *  FROM notes WHERE head LIKE ? OR body LIKE ?", (query, query))
 return [dict(row) for row in c.fetchall()]