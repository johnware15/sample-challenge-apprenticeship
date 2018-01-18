import '../env'
import {expect} from 'chai'
import {signUp} from '../../src/actions'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    const newUser = [
      'a',
      'a@a.com',
      'aaa',
    ]
    return expect(signUp(newUser)).to.have.lengthOf(3)
  })
})
