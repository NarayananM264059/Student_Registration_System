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

**Implementation Details:**

- **HTML:** 
  - `index.html`: Contains the registration form for adding new students.
  - `display.html`: Displays the list of registered students in a table.
  - Both pages have a header, main content section, and footer.

- **CSS:**
  - `style.css`: Styles the registration form and other elements on `index.html`.
  - `display-style.css`: Styles the display table and modal popup for `display.html`.

- **JavaScript:**
  - `script.js`: Contains functions for registering new students and navigating between pages.
  - `display-script.js`: Contains functions for displaying, editing, and deleting student records on `display.html`.

**Workflow:**

1. **Registration:**
   - Users navigate to `index.html` to register new students by filling out the registration form.
   - Upon clicking the "Register" button, the student details are validated and added to `localStorage`.

2. **Display:**
   - Users can view the list of registered students by navigating to `display.html`.
   - The list is populated dynamically from `localStorage` using JavaScript.

3. **Editing:**
   - Users can edit a student's details by clicking the "Edit" button next to the student's record.
   - A modal popup appears with the student's details pre-filled.
   - After editing, users can click the "Update" button to save the changes to `localStorage`.

4. **Deletion:**
   - Users can delete a student record by clicking the "Delete" button next to the student's record.
   - The student is removed from `localStorage`, and the display is updated to reflect the changes.

**Conclusion:**
The Student Registration System provides a simple and intuitive way to manage student records. It offers essential functionalities like registration, editing, and deletion of student records, all while ensuring data persistence using `localStorage`. The user interface is designed to be user-friendly, with input validation and clear navigation between pages.


## Screenshots

![Screenshot]([others\img\index.png](https://github.com/NarayananM264059/Student_Registration_System/blob/e1ecdc72b2a85b6c4097489081bee6adcc4db4fd/others/img/index.png))
![Screenshot](images/screenshot.png)
<!-- Add more screenshots as needed -->

## Videos

[![Video 1](https://link-to-your-video-thumbnail.com)](https://link-to-your-video.com)
[![Video 2](https://link-to-your-video-thumbnail.com)](https://link-to-your-video.com)
<!-- Add more videos as needed -->
