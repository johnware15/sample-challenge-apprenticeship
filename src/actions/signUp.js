import db from 'src/db/index'

export default function signUp(name, email, password) {
  db.oneOrNone('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password])
}
