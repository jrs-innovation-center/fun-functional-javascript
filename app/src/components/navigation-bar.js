const html = require('choo/html')

module.exports = (title) => html`
<div class="navigation-bar navigation-bar--material">
  <div class="navigation-bar__center navigation-bar--material__center">
    ${title}
  </div>
</div>
`
