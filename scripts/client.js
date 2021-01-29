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
  if (verbose) {
    console.log('in addEmployee()');
  }
}
