$(document).ready(onReady);

console.log('We have JavaScript');

const verbose = true;

const employees = [];

const dollarFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function onReady() {
  console.log('We have jQuery');
  displayMonthlyCosts();
  $(document).on('click', '#addEmpSubmitBtn', addEmployee);
}

/**
 * Function is an event handler to be executed with the "Add Employee" button is clicked
 * Employee object is created with their name, id, title and salary
 * Employee object is added to employee list, annual cost is calculated,
 * DOM table is updated and the form inputs are cleared
 * @param {*} event
 */
function addEmployee(event) {
  // Prevent the "Add Employee" button from refreshing the page when clicked
  event.preventDefault();
  // Capture inputs from DOM
  const $empFirstName = $('#firstNameInput').val();
  const $empLastName = $('#lastNameInput').val();
  const $empID = $('#employeeIDInput').val();
  const $empTitle = $('#employeeTitleInput').val();
  const $empAnnSal = Number($('#annualSalaryInput').val());
  // Create employee object
  const employee = {
    firstName: $empFirstName,
    lastName: $empLastName,
    employeeID: $empID,
    title: $empTitle,
    annualSalary: $empAnnSal,
  };
  // Add employee object to employee list
  employees.push(employee);
  // Helper functions called
  calculateMonthlyCosts(calculateAnnualCosts(employees));
  displayEmployees(employees);
  clearInputs();

  // Debugging and Testing script
  if (verbose) {
    console.log('in addEmployee()');
    console.log('\t$empFirstName:', $empFirstName);
    console.log('\t$empLastName:', $empLastName);
    console.log('\t$empID:', $empID);
    console.log('\t$empTitle:', $empTitle);
    console.log('\t$empAnnSal:', $empAnnSal);
    console.log('\temployee:', employee);
    console.log('\temployees[]:', employees);
  }
}

/**
 * Function calculates the annual cost for all employees based on their annual salary
 * @param {*} employeeArray
 */
function calculateAnnualCosts(employeeArray) {
  // Declare and initialize the starting total
  let total = 0;
  // Loop through provided list to add each employee's annual salary to total
  for (let employee of employeeArray) {
    total += employee.annualSalary;

    // Debugging and Testing script
    if (verbose) {
      console.log('in calculateAnnualCosts()');
      console.log('\tannual salary:', employee.annualSalary);
      console.log('\ttotal:', total);
    }
  }

  return total;
}

/**
 * Function displays the provided list to the DOM as a row in the table
 * @param {*} employeeList
 */
function displayEmployees(employeeList) {
  // Taget HTML element
  let $employeeTable = $('#employeeTable');
  // Clear existing table data
  $employeeTable.empty();
  // Loop through provided list and to append data to table
  for (employee of employeeList) {
    $employeeTable.append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.title}</td>
        <td>${dollarFormat.format(employee.annualSalary)}</td>
      <tr>
    `);
  }

  // Debugging and Testing script
  if (verbose) {
    console.log('in displayEmployees');
  }
}

/**
 * Function clears the Add Employee input form
 */
function clearInputs() {
  // Reset input values
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#employeeIDInput').val('');
  $('#employeeTitleInput').val('');
  $('#annualSalaryInput').val('');

  // Debugging and Testing script
  if (verbose) {
    console.log('in clearInputs()');
  }
}

/**
 * Function calculates the monthly costs based on employees' annual salary
 * Monthly cost is unedited float
 * @param {*} annSal
 */
function calculateMonthlyCosts(annSal) {
  const monthlyTotal = annSal / 12;
  displayMonthlyCosts(monthlyTotal);

  // Debugging and Testing script
  if (verbose) {
    console.log('in calculateMonthlyCosts');
    console.log('\tannual salary passed in:', annSal);
    console.log('\tcalculated monthly costs:', monthlyTotal);
  }
}

/**
 * Function appends the provided dollar value to the DOM under "monthlyCosts"
 * If dollar value is greater than $20,000, the background color is changed to red
 * @param {*} monthlyCosts
 */
function displayMonthlyCosts(monthlyCosts = 6083.33) {
  // Format monthly costs for US currency
  const monthlyCostsDollar = dollarFormat.format(monthlyCosts);
  // Target HTML element
  const $monthlyTotal = $('#monthlyCost');
  // Clear existing value
  $monthlyTotal.empty();
  // Send calculated monthly costs to DOM
  $monthlyTotal.append(monthlyCostsDollar);

  if (monthlyCosts > 20000) {
    $monthlyTotal.css('background-color', '#FF0000');
  }

  // Debugging and Testing script
  if (verbose) {
    console.log('in displayMonthlyCosts()');
    console.log('\tmonthly cost in:', monthlyCosts);
    console.log('\tmonthly costs out:', monthlyCostsDollar);
  }
}
