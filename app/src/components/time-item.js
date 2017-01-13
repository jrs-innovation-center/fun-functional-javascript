const html = require('choo/html')

module.exports = time => html`
<li class="list__item pl3">
  <div class="list__item__center">
    <label class="list__item__label">${time}</label>
  </div>
  <div class="list__item__right">
    <button class="button--quiet">
      <i class="fa fa-trash"></i>
    </button>
  </div>
</li>
`
