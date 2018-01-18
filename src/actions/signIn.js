import db from '../db'

export default function signIn(email, password) {
  db.oneOrNone('SELECT email, password FROM users WHERE email=$1 AND password=$1', [email, password])
}
