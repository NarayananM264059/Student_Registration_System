// Function to go to display.html
function goTodisplayForm() {
    window.location.href = 'display.html';
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}/;
    return emailPattern.test(email);
}

// Function to validate student name format
function isValidName(name) {
    const namePattern= /^[A-Za-z ]+$/;
    return namePattern.test(name);
}

// Function to validate student ID and contact number format
function isValidNumber(number) {
    const numberPattern = /^[0-9]+$/;
    return numberPattern.test(number);
}

// Function to reset the form
function resetForm() {
    document.getElementById('studentName').value = "";
    document.getElementById('studentID').value = "";
    document.getElementById('email').value = "";
    document.getElementById('contactNo').value = "";

    // Reset button text back to "Register" and addStudent function
    const registerButton = document.querySelector('button');
    registerButton.textContent = 'Register';
    registerButton.removeEventListener('click', updateStudent); 
    registerButton.addEventListener('click', addStudent);
}

// Function to add a new student record
function addStudent() {
    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;

    // Validate input fields
    if (!isValidName(studentName)) {
        alert('Please enter valid student name.');
        return;
    }
    
    if (!isValidNumber(studentID)) {
        alert('Please enter valid student ID.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter valid email.');
        return;
    }

    if (!isValidNumber(contactNo)) {
        alert('Please enter valid contact number.');
        return;
    }

    // Check if any field is empty
    if (!studentName || !studentID || !email || !contactNo) {
        alert('Please fill  all fields.');
        return;
    }

    // Get existing student list from localStorage or initialize an empty array
    let studentList = JSON.parse(localStorage.getItem('studentList')) || [];

    // Check if the student ID already exists
    if (studentList.some(student => student.studentID === studentID)) {
        alert('Student with this ID already exists.Try again');
        return;
    }

    // Add new student record to the list
    studentList.push({
        studentName,
        studentID,
        email,
        contactNo
    });

    // Save updated student list to localStorage
    localStorage.setItem('studentList', JSON.stringify(studentList));

    displayStudents();

    resetForm();
}

