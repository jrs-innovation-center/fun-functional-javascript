const html = require('choo/html')

module.exports = (icon, onclick) => html`
<div class="absolute bottom-0 right-0 pa3">
  <span class="fab" onclick=${onclick}><i class="zmdi zmdi-${icon}"></span>
</div>
`
