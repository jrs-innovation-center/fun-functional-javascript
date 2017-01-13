# ListItem Component

This component creates a list item and gives the developer the option to define
the left, center and right positions.

## Usage

```
${ListItem({center: html`
  <input
    value=${name.first}
    oninput=${update('name.first')}
    type="text" class="text-input" placeholder="First Name">
`
})}
```
