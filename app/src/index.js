const choo = require('choo')

const app = choo()

app.model(require('./model'))

app.router({default: '/'}, [
  ['/', require('./reminders')],
  ['/new', require('./reminders/form')]
  // ['/:id', require('./reminders/show')],
  // ['/:id/edit', require('./reminders/form')]
])

document
  .getElementById('splash')
  .innerHTML = ''

document
  .getElementById('app')
  .appendChild(app.start())
