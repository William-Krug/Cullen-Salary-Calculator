$(document).ready(onReady);

console.log('We have JavaScript');

const verbose = true;

const employees = [];

function onReady() {
  console.log('We have jQuery');
  $(document).on('click', '#addEmpSubmitBtn', addEmployee);
}

function addEmployee(event) {
  event.preventDefault();
  const $empFirstName = $('#firstNameInput').val();
  const $empLastName = $('#lastNameInput').val();
  const $empID = $('#employeeIDInput').val();
  const $empTitle = $('#employeeTitleInput').val();
  const $empAnnSal = Number($('#annualSalaryInput').val());
  const employee = {
    firstName: $empFirstName,
    lastName: $empLastName,
    employeeID: $empID,
    title: $empTitle,
    annualSalary: $empAnnSal,
  };
  employees.push(employee);
  calculateMonthlyCosts(employees);
  displayEmployees(employees);

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

function calculateMonthlyCosts(employeeArray) {
  let sum = 0;
  for (let employee of employeeArray) {
    sum += employee.annualSalary;
    if (verbose) {
      console.log('in calculateMonthlyCosts()');
      console.log('\tannual salary:', employee.annualSalary);
      console.log('\tsum:', sum);
    }
  }
  return sum;
}

function displayEmployees(employeeList) {
  let $employeeTable = $('#employeeTable');
  $employeeTable.empty();
  for (employee of employeeList) {
    $employeeTable.append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
      <tr>
    `);
  }

  if (verbose) {
    console.log('in displayEmployees');
  }
}
