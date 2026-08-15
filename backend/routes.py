from flask import request, jsonify, request
import database as db

def register_routes(app):
 @app.get("/notes")
 def read_notes():
  notes = db.read_notes()
  return jsonify([dict(note) for note in notes])
 
 @app.post('/notes')
 def add_note():
  data = request.get_json()
  try:
   rows = db.add_note(data['head'], data['body'])
   return jsonify({"message":"successfully created"})
  except Exception as e:
   err_msg = f"error({e})"
   return jsonify({"message": err_msg})
  
 @app.delete('/notes/<int:id>')
 def delete_note(id):
  try:
   rows = db.delete_note(id)
   return jsonify({"message":"successfully deleted"})
  except Exception as e:
   err_msg = f"error({e})"
   return jsonify({"message":err_msg})
  
 @app.route('/search')
 def search_notes():
  search_key = request.args.get('q', '')
  if not search_key:
   return jsonify([])
  
  rows = db.search_note(search_key)
  if rows == []:
   return jsonify({"message":"no matching notes"})
  return jsonify(rows)
 
# 