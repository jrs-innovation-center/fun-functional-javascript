const html = require('choo/html')
const {map, prop} = require('fun-fp')

const NavBar = require('../components/navigation-bar')
const FabLink = require('../components/fab-link')
const ListItem = require('../components/list-item')

module.exports = (state, prev, send) => {
  if (!prev || state.location.pathname !== prev.location.pathname) {
    send('list', {
      key: 'reminders',
      target: 'reminders'
    })
  }

  const li = reminder => ListItem({
    center: html`
      <div>
        ${reminder.message}
        <br />
        ${map(t => html`<span class="mr3">${t}</span>`, reminder.times)}
      </div>
    `
  })

  return html`
    <div>
      ${NavBar(prop('title', state))}
      <div class="">
        <img height="120px" width="100%" src="/images/pattern.svg" />
      </div>

      <ul class="list list--noborder">
        ${map(li, state.reminders)}
      </ul>

      ${FabLink('plus', '/new')}
    </div>
  `
}
