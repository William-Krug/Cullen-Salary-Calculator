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
  const $empAnnSal = $('#annualSalaryInput').val();
  if (verbose) {
    console.log('in addEmployee()');
    console.log('\t$empFirstName:', $empFirstName);
    console.log('\t$empLastName:', $empLastName);
    console.log('\t$empID:', $empID);
    console.log('\t$empTitle:', $empTitle);
    console.log('\t$empAnnSal:', $empAnnSal);
  }
}
