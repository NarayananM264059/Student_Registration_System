// Function to go to index.html
function goToRegistrationForm() {
    window.location.href = 'index.html';
}

// Function to display student records
function displayStudents() {
    const studentList = JSON.parse(localStorage.getItem('studentList')) || [];

    const tableBody = document.getElementById('studentList');
    tableBody.innerHTML = '';

    studentList.forEach(student => {
        const row = tableBody.insertRow();

        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1); 
        const emailCell = row.insertCell(2);
        const contactCell = row.insertCell(3);
        const actionsCell = row.insertCell(4);


        nameCell.textContent = student.studentName;
        idCell.textContent = student.studentID;
        emailCell.textContent = student.email;
        contactCell.textContent = student.contactNo;

        // Add Edit and Delete buttons
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editStudent(student.studentID));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteStudent(student.studentID));

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    });
}

// Function  delete student record
function deleteStudent(studentID) {
    const studentList = JSON.parse(localStorage.getItem('studentList')) || [];
    const updatedList = studentList.filter(student => student.studentID !== studentID);
    
    localStorage.setItem('studentList', JSON.stringify(updatedList));
    
    displayStudents();
}

//Function to edit student
function editStudent(studentID) {
    let studentList = JSON.parse(localStorage.getItem('studentList')) || [];
    let student = studentList.find(student => student.studentID === studentID);
    
    if(student) {
        document.getElementById("updateStudentName").value = student.studentName;
        document.getElementById("updateStudentID").value = student.studentID;
        document.getElementById("updateEmail").value = student.email;
        document.getElementById("updateContactNo").value = student.contactNo;

        document.getElementById("updateModal").style.display = "block";
    }
}

// Function to close the modal popup
function closeUpdateModal() {
    document.getElementById("updateModal").style.display = "none";
}


// Function to update student record
function updateStudent() {
    let updatedStudent = {
        studentID: document.getElementById("updateStudentID").value,
        studentName: document.getElementById("updateStudentName").value,
        email: document.getElementById("updateEmail").value,
        contactNo: document.getElementById("updateContactNo").value
    };

    let studentList = JSON.parse(localStorage.getItem('studentList')) || [];
    
   
    let index = studentList.findIndex(student => student.studentID === updatedStudent.studentID);
    
    if(index !== -1) {
        
        studentList[index] = updatedStudent;

        localStorage.setItem('studentList', JSON.stringify(studentList));

        displayStudents();

        closeUpdateModal();
    }
}

// Load student list
window.onload = displayStudents;