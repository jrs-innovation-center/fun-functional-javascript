const html = require('choo/html')

module.exports = (imgUrl, classes='') => html`
<div class="tc w-100">
  <img width="100%" height="120px" src=${imgUrl} />
</div>
`
