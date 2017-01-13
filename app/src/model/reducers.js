const { set, lensPath, split, not, path } = require('fun-fp')

const update = (state, data) =>
  set(lensPath(split('.', data.key)), data.value, state)
const toggle = (state, data) =>
  set(lensPath(['flags', data]), not(path(['flags', data], state)), state)

module.exports = { update, toggle }
