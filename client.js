// console.log('Salary Calculator');
$(document).ready(readyNow);



function readyNow() {
    console.log('ready now');
   
    $('.submit-button').on('click', newEmployee);

    $('.clear-list').on('click', clearEmp);
    
};

let employees=[];

function newEmployee(){
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
       <td> ${'<button class="delete-button">Delete</button>'}
       </tr>`);
       $('#fName').val('');
       $('#lName').val('');
       $('#eId').val('');
       $('#eTitle').val('');
       $('#aSalary').val('');

    
};// end newEmployee

function clearEmp() {
    console.log('in clearEmp', $('#employee-table').val());  
    // empty employee table; setter
    $('#employee-table').val('');
    }
    clearEmp();






// function empTableDisplay() {
//     console.log('in empTableDisplay');
    
// }









