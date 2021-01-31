![MIT LICENSE](https://img.shields.io/github/license/William-Krug/Cullen-Salary-Calculator.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/Cullen-Salary-Calculator.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/Cullen-Salary-Calculator.svg?style=flat-square)

# Cullen Salary Calculator

## Description

_Duration: 3 Days_

This app is a simple salary calculator. A Manager or HR Specialist can add an employee by the added form, see a list of all employees and get a breakdown of what the combined monthly salary is for all employees. If the "Total Monthly Cost" exceeds $20,000, the dollar amount will have a RED background

The app was created with a HTML inputs, JavaScript, and jQuery.

## Screen Shot

![Start Screen](https://github.com/William-Krug/Cullen-Salary-Calculator/blob/master/starting-screen.png)

![Total Monthly Costs below $20,000](https://github.com/William-Krug/Cullen-Salary-Calculator/blob/master/monthly-costs-below-%2420%2C000.png)

![Total Monthly Costs above $20,000](https://github.com/William-Krug/Cullen-Salary-Calculator/blob/master/monthly-costs-above-%2420%2C000.png)

### Prerequisites

- No prerequisites are needed for this app

## Installation

1. `Fork` the repository
2. `clone` a copy to the desired workspace
3. Traverse to the newly cloned directory in your terminal
4. Run `open index.html` in your terminal

## Usage

1. Enter Employee Information: First Name, Last Name, Employee ID, Job Title, and Annual Salary, into the corresponding input fields in the **Add Employee** field
2. Click on the **Add Employee** button
3. Repeat Steps 1 & 2 until all desired employees have been entered into the system
4. A table will appear in the **Employees** section, breaking down all of the pertinent information
5. If the **total Monthly Cost** exceeds $20,000, the background of the dollar amount will turn red
6. Click the **Delete** button at the end of the row to remove the corresponding employee, and their information, from the table

## Built With

- HTML
- CSS
- JavaScript
- jQuery

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

A special shout out goes to the **Cullen Cohort** whose support and guidance saved innumerable hours on this project.

## Support

If you have suggestions or issues, please email me at [william.p.krug@gmail.com](william.p.krug@gmail.com)

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
- [x] README.md write up

## Stretch To Do

- [ ] CSS Styling
- [ ] update total after employee is "deleted"
  - [ ] .text() and .data() are helpful
- [ ] make input fields required
- [ ] annual salary min/max
