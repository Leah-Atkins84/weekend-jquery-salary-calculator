// console.log('Salary Calculator');
$(document).ready(readyNow);



function readyNow() {
    console.log('ready now');
   //$('.submit-button').on('click', addEmp);
    $('.submit-button').on('click', newEmployee);

    //$('.clear-list').on('click', clearEmp);
    
};

let employees=[];

function newEmployee(){
    // console.log('in newEmployee function', fName, lName, eId, eTitle, aSalary);
    let employeeObj={
        first: $('#fName').val(),
        last: $('#lName').val(),
        id: $('#eId').val(),
        title: $('#eTitle').val(),
        salary: $('#aSalary').val() 
    }
    employees.push(employeeObj);// pushes employee info into employee array when employee added
   //newEmployee(); 
   $('#employee-table').append(
       `<tr> 
       <td> ${employeeObj.first}</td> 
       <td> ${employeeObj.last}</td>
       <td> ${employeeObj.id}</td>
       <td> ${employeeObj.title}</td>
       <td> ${employeeObj.salary}</td>
       </tr>`);
       $('#fName').val(''), $('#lName').val(''), $('#eId').val(''), $('#eTitle').val(''), $('#aSalary').val('');
    

``
};// end newEmployee

// function addEmp() {
//     console.log('Added:', $( '#fName' ).val());
    
//     //$('#fName').val(), $('#lName').val(), $('#eId').val(), $('#eTitle').val(), $('#aSalary').val();
   
//$('#employee-table').append(`'<tr>', '<td>' + ${employees.fName} + '</td>', '<td>' + ${employees.lName} + '</td>', '<td>' + ${employees.eId} + '</td>', '</td>' + ${employees.eTitle} + '</td>', '<td>' + ${employees.aSalary} + '</td>', '</tr>'`);
    
//    // $('#fName').val(''), $('#lName').val(''), $('#eId').val(''), $('#eTitle').val(''), $('#aSalary').val('');
    
// };

console.log(employees);



function empTableDisplay() {
    console.log('in empTableDisplay');
    
}
//  function clearEmp() {
//     console.log('in clearEmp', $('#addInput').val());  
//     // empty input; setter
//     $('#addInput').val('');
//  }








