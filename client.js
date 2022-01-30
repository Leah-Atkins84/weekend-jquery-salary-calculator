// console.log('Salary Calculator');
$(document).ready(readyNow);



function readyNow() {
    console.log('ready now');
    $('.submit-button').on('click', addEmp);
    //$('.clear-list').on('click', clearEmp);
    
};

function addEmp() {
    console.log('Added:', $( '#fName' ).val());
   
    $('#employee-table').append('<tr><td' + $('#fName') + '<tr><td' + $('#lName') + '<tr><td>' + $('#eId') + '<tr><td>' + $('#eTitle') + '<tr><td>' + $('#aSalary'));
    
    $('#fName').val(''), $('#lName').val(''), $('#eId').val(''), $('#eTitle').val(''), $('#aSalary');
};

//$('#fName').val(),$('#lName').val(), $('#eId').val(), $('#eTitle').val(), $('#aSalary').val();

function empTableDisplay() {
    console.log('in empTableDisplay');
    
}





// function clearEmp() {
    
// }



// function newEmployee(firstName, lastName, empId, empTitle, anSalary){
//     console.log('in newEmployee function', firstName, lastName, empId, empTitle, anSalary);
//     let employeeObj={
//         first: firstName,
//         last: lastName,
//         id: empId,
//         title: empTitle,
//         salary: anSalary 
//     }
//     employees.push(employeeObj);// pushes employee info into employee array when employee added
//     return true;
// }// end newEmployee