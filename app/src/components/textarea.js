const html = require('choo/html')

module.exports = (placeholder, value, update) => html`
<li class="list_item pl3">
  <div class="list__item__center">
    <textarea class="textarea textarea--transparent" oninput=${update}
      type="text" placeholder=${placeholder}>${value}</textarea>
  </div>
</li>
`
