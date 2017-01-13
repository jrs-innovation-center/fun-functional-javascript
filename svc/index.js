const cron = require('node-cron')
const request = require('request')
const notify = require('./notify')

const url = process.env.API

cron.schedule('* * * * *', function(){
  // check api based with a filter
  // for now, just get all the reminders
  request(`${url}/reminders`, {json: true}, (e, r, reminders) => {
    if (e) return console.log(e.message)
    // find all reminders that match the time, day and week of the month
    // then send one message for given batch that meet the criteria
    // notify(message)
  })
})
