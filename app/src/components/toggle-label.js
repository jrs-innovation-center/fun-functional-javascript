const html = require('choo/html')

module.exports = (caption, onclick) => html`
<li class="list__item pl3" onclick=${onclick}>
  <div class="list__item__center">
    <label class="list__item__label">${caption}</label>
  </div>
</li>
`
