const html = require('choo/html')
const uuid = require('uuid')

module.exports = (caption, name, checked, update) => {
  const id = uuid.v4()
  return html`
    <li class="list__item list__item--tappable">
      <div class="list__item__left">
        <label class="checkbox">
          <input
            checked=${checked}
            onchange=${update}
            type="checkbox" id=${id} class="checkbox__input" name=${name} />
          <div class="checkbox__checkmark"></div>
        </label>
      </div>
      <label for=${id} class="list__item__center">
        ${caption}
      </label>
    </li>
`
}
