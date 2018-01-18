console.log('hello from the browser JavaScript')

const signUp = function (event) {
  document.getElementsById('signUp')
  fetch('/sign-up', {
    method: 'POST',
    headers: 'application/json',
    body: JSON.stringify()
  })
    .then(response => response.json())
    .then(() => {
      response.send('/')
    })
    .catch(error)
}

const signIn = function (event) {
  document.getElementsById('signIn')
  fetch('/sign-in', {
    method: 'GET',
    headers: 'application/json',
    body: JSON.stringify()
  })
    .then(response => response.json())
    .then(() => {
      response.send('/')
    })
    .catch(error)
}
