// console.log('Salary Calculator');
$(document).ready(readyNow);



function readyNow() {
    console.log('ready now');
    $('.submit-button').on('click', addEmp);
    //$('.clear-list').on('click', clearEmp);
    
};

let employees =[];

function newEmployee(firstName, lastName, empId, empTitle, anSalary){
    console.log('in newEmployee function', fName, lName, eId, eTitle, aSalary);
    let employeeObj={
        first: ftName,
        last: lName,
        id: eId,
        title: eTitle,
        salary: aSalary 
    }
    employees.push(employeeObj);// pushes employee info into employee array when employee added
    
};// end newEmployee

function addEmp() {
    console.log('Added:', $( '#fName' ).val());
    
    $('#fName').val(),$('#lName').val(), $('#eId').val(), $('#eTitle').val(), $('#aSalary').val();
   
    $('#employee-table').append('<tr>', '<td>' + `${employees.fName}` + '</td>', '<td>' + `${employees.lName}` + '</td>', '<td>' + `${employees.eId}` + '</td>', '</td>' + `${employees.eTitle}` + '</td>', '<td>' + `${employees.aSalary}` + '</td>', '</tr>');
    
    $('#fName').val(''), $('#lName').val(''), $('#eId').val(''), $('#eTitle').val(''), $('#aSalary').val('');
};



function empTableDisplay() {
    console.log('in empTableDisplay');
    
}
//  function clearEmp() {
//     console.log('in clearEmp', $('#addInput').val());  
//     // empty input; setter
//     $('#addInput').val('');
//  }









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