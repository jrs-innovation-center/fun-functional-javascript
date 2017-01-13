const xhr = require('xhr')
const url = process.env.API

const { prop } = require('fun-fp')
const empty = require('./state')

module.exports = {
  put: (state, data, send, done) => {
    xhr.put(`${url}/${data.target}`, {
      json: state[data.key]
    }, (e,r,b) => {  // clear data key on state
      const errMessage = prop('error', data) || prop('message', e || {}) || prop('message', b) || 'Server Error'
      if (e || r.statusCode === 500) {
        return send('update', { key: 'error', value: errMessage }, done)
      }
      send('update', {key: data.key, value: prop(data.key, empty)}, _ =>
        send('location:set', data.href, done)
      )
    })

  },
  post: (state, data, send, done) => {
    // may have to use fetch if xhr does not work due to cors

    xhr.post(`${url}/${data.target}`, {
      json: state[data.key]
    }, (e,r,b) => {  // clear data key on state
      const errMessage = prop('error', data) || prop('message', e || {}) || prop('message', b) || 'Server Error'
      if (e || r.statusCode === 500) {
        return send('update', { key: 'error', value: errMessage }, done)
      }
      send('update', {key: data.key, value: prop(data.key, empty)}, _ =>
        send('location:set', data.href, done)
      )
    })
  },
  list: (state, data, send, done) => {
    xhr(`${url}/${data.target}`, {
      json: true
    }, (e, r, b) => {
      send('update', {key: data.key, value: b}, done)
    })
  },
  get: (state, data, send, done) => {
    xhr(`${url}/${data.target}`, {
      json: true
    }, (e, r, b) => {
      send('update', {key: data.key, value: b}, done)
    })
  }
}
