const html = require('choo/html')

module.exports = (icon, href, position="right") => html`
<div class="absolute bottom-0 ${position}-0 pa3">
  <a class="fab" href=${href}><i class="zmdi zmdi-${icon}"></a>
</div>
`
