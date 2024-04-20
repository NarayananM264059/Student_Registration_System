# Student Registration System
### Student Registration System Project Description

**Overview:**

The Student Registration System is a web-based application designed to manage student information. It allows users to register new students, view a list of registered students, edit student details, and delete student records. The system uses HTML, CSS, and JavaScript for the front-end, and local storage to store student records.

**Features:**

1. **Registration Form:**
   - Users can register a new student by providing details such as Student Name, Student ID, Email ID, and Contact Number.
   - Input fields are validated to ensure:
     - Student ID and Contact Number accept only numbers.
     - Student Name accepts only characters.
     - Email accepts a valid email format.
   - Users are alerted with appropriate messages for validation errors or empty fields.

2. **Display Section:**
   - A table displays the registered student records, with columns for Student ID, Student Name, Email ID, Contact Number, and Actions.
   - Each row in the table contains Edit and Delete buttons for managing student records.
   - A vertical scrollbar is added dynamically to the table when the content exceeds its viewport height.

3. **Edit and Delete Functionality:**
   - Users can edit existing student records by clicking the Edit button next to a student's details.
   - Clicking the "Edit" button next to a student record opens a modal popup.The modal displays a form (#updateModal) with the selected student's details pre-filled.
   - Users can modify the student details in the modal and update them.
   - Users can delete student records by clicking the Delete button, removing the record from the displayed list and local storage.

4. **Navigation:**
   - A Home button is provided on the list of registered students page, allowing users to return to the registration form easily.

5. **Styling and Design:**
   - The application is styled using CSS to enhance visual appeal, with proper spacing, alignment, and color usage for better readability.
   - The buttons for Edit and Delete actions have a consistent style to maintain a cohesive design.

6. **Local Storage:**
   - Student records are stored locally using JavaScript's local storage feature, ensuring data persistence even after page refresh.

**Technical Stack:**

- **Front-end:** HTML, CSS, JavaScript
- **Storage:** Local Storage

**Purpose:**

The Student Registration System aims to provide a user-friendly interface for managing student records effectively. It is designed for educational institutions or organizations that require a simple and efficient system to register and manage student information.

By implementing this Student Registration System, users can easily register new students, view existing records, and perform necessary actions such as editing or deleting records, all within a single web application.
