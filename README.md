![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Cullen Salary Calculator

## Description

_Duration: 3 Days_

This app is a simple salary calculator. A Manager or HR Specialist can add an employee by the added form, see a list of all employees and get a breakdown of what the combined monthly salary is for all employees.

The app was created with a HTML inputs, JavaScript, and jQuery.

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it?

## Screen Shot

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](https://github.com/William-Krug/Cullen-Salary-Calculator/blob/master/starting-screen.png)

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](https://github.com/William-Krug/Cullen-Salary-Calculator/blob/master/monthly-costs-below-%2420%2C000.png)

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](https://github.com/William-Krug/Cullen-Salary-Calculator/blob/master/monthly-costs-above-%2420%2C000.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example -- Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx

## Built With

List technologies and frameworks here

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support

If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)

## To Do

- [x] Input Form
  - [x] employee first name
  - [x] employee last name
  - [x] employee ID number
  - [x] employee job title
  - [x] employee annual salary
- [x] Submit button
  - [x] captures data from form and stores in variables
  - [x] creates employee object
  - [x] pushes object onto array
  - [x] calculate annual costs
  - [x] render information to DOM
  - [x] clear input fields
- [x] calculate monthly costs
  - [x] calculate monthly costs
  - [x] append to DOM
  - [x] red background if monthly costs exceed $20,000
- [x] create table
- [x] delete button that removes employee from DOM
- [ ] README.md write up

## Stretch To Do

- [ ] CSS Styling
- [ ] update total after employee is "deleted"
  - [ ] .text() and .data() are helpful
- [ ] make input fields required
- [ ] annual salary min/max
