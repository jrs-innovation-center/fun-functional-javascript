const html = require('choo/html')

module.exports = (value, update, add) => html`
<li class="list__item pl3">
  <div class="list__item__center">
    <input
    value=${value}
    oninput=${update}
    type="time" class="text-input" placeholder="Select Time" />
    </div>
  <div class="list__item__right">
    <div class="list__item__label"><button onclick=${add} class="button--quiet">
      <i class="zmdi zmdi-plus-circle"></i>
    </button></div>
  </div>
</li>
`
