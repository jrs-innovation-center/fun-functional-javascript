# RemindMe

RemindMe is an app that send reminders that you create to your email address at the time you want to be reminded.

This is a Progressive Web Application Lite, that is designed to be added to your mobile devices home screen via the browser, no app store, no download and install.

The app is very simple, you can create, edit, view, list and remove reminders. Each reminder takes the following data:

- message
- Day of Week
- Weekly, 1 week of the month, 2nd week of the month, 3rd week of the month, 4th week of the month
- Time of Day
- re-occuring y/n
- active y/n

When you create an account, you will be asked to use your email address as your login credentials, this email address is where your reminders will be sent.

This app will consist of two parts, an api server that will be running as a cron service checking the database for any reminders every minute. Then the front end of the application will be a choo application using fun-fp as the functional utility library. It will also use onsen css and tachyons css for design.

Lastly, it will be using a couchdb server to post your reminders to. It will have two views, one to get your reminders by email address and the other to get all reminders for a given day and time. If a given record is not re-occurring then the cron service will run a process to deactivate that alert.


*** Side Note the it might be a good fit for using aws lambda to do the reminder processing and generating an email, for demo purpose, it might be best to use a gmail account or some other account, need to figure that one out.

Also, it might be easier to use an open pouchdb database or couchdb database for the reminders, or a default userid/password that will be deprecated.

THe project is broken into four sub projects

- app - app is the simple mobile app to build reminders
- api - api is the json test server providing basic rest api features
- docs - has the documentation of the application
- svc - service does the check to for reminders for a given time and then sends via email
