const html = require('choo/html')
const {ifElse, reject, equals,
  set, lensPath, compose, append, remove,
  contains, map} = require('fun-fp')

const NavBar = require('../components/navigation-bar')
const ListItem = require('../components/list-item')
const FabLink = require('../components/fab-link')
const CheckboxItem = require('../components/checkbox-item')
const ToggleLabel = require('../components/toggle-label')
const Banner = require('../components/banner')
const FabClick = require('../components/fab-click')
const TimeInput = require('../components/time-input')
const TimeItem = require('../components/time-item')
const TextArea = require('../components/textarea')

module.exports = (state, prev, send) => {
  const {reminder: { message, weeks, days, times, tempTime, once, active }} = state

  const submitReminder = e =>
    send('post', { target: 'reminders', key: 'reminder', href: '/'})

  const update = field => e =>
    send('update', { key: `reminder.${field}`, value: e.target.value})

  const check = (field, value) => e => send('update', { key: `reminder.${field}`,
    value:
      ifElse(contains(value), remove(value),append(value))(state.reminder[field])
  })

  const checkAll = (field, value) =>  e => send('update', { key: 'reminder.' + field, value})

  const addTime = e => send('update', {
    key: 'reminder',
    value: compose(
      set(lensPath(['tempTime']), ''),
      set(lensPath(['times']), append(tempTime, times))
    )(state.reminder)
  })

  const toggle = flag => e => send('toggle', flag)

  return html`
  <div>
    ${NavBar('New Reminder')}
    ${Banner('/images/ms-icon-310x310.png')}

    <ul class="list list--noborder">
      ${TextArea('Message', message, update('message'))}

      ${ToggleLabel('Weekly', toggle('weekly'))}

      ${state.flags.weekly ? [
        CheckboxItem('1st Week of Every Month', 'weeks', contains('1', weeks), check('weeks', '1')),
        CheckboxItem('2nd Week of Every Month', 'weeks', contains('2', weeks), check('weeks', '2')),
        CheckboxItem('3rd Week of Every Month', 'weeks', contains('3', weeks), check('weeks', '3')),
        CheckboxItem('4th Week of Every Month', 'weeks', contains('4', weeks), check('weeks', '4'))
      ] : null}


      ${ToggleLabel('Daily', toggle('daily'))}
      ${state.flags.daily ? [
        CheckboxItem('Sunday', 'days', contains('0', days), check('days', '0')),
        CheckboxItem('Monday', 'days', contains('1', days), check('days', '1')),
        CheckboxItem('Tuesday', 'days', contains('2', days), check('days', '2')),
        CheckboxItem('Wednesday', 'days', contains('3', days), check('days', '3')),
        CheckboxItem('Thursday', 'days', contains('4', days), check('days', '4')),
        CheckboxItem('Friday', 'days', contains('5', days), check('days', '5')),
        CheckboxItem('Saturday', 'days', contains('6', days), check('days', '6'))

      ] : null}

      ${TimeInput(tempTime, update('tempTime'), addTime)}
      ${map(TimeItem, times)}
    </ul>
    ${FabLink('close', '/', 'left')}
    ${FabClick('save', submitReminder, 'right')}

  </div>
  `
}
