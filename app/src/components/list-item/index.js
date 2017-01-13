const html = require('choo/html')

const div = (position='center', template) => html`
  <div class="list__item__${position}">${template}</div>
`

module.exports = ({left, center, right}) => html`
  <li class="list_item pl3">
    ${left ? div('left', left) : null}
    ${center ? div('center', center) : null}
    ${right ? div('right', right) : null}
  </li>
`
