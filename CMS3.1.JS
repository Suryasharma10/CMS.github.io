// Array to store student details
let students = [];

// Function to handle form submission
function submitform() {
    // Get form values
    const name = document.getElementById("student-name").value.trim();
    const id = document.getElementById("student-id").value.trim();
    const grade = document.getElementById("student-grade").value.trim();
    const dob = document.getElementById("dob").value;
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector("input[name='Male']:checked") ? "Male" : 
                   document.querySelector("input[name='Female']:checked") ? "Female" : "";

    // Validate fields
    if (!name || !id || !grade || !dob || !contact || !email || !gender) {
        alert("Please fill in all the fields!");
        return;
    }

    // Add the student to the array
    students.push({ name, id, grade, dob, gender, contact, email });

    // Update the table
    updateTable();

    // Clear the form
    resetform();
}

// Function to update the table with student details
function updateTable() {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ""; // Clear existing rows

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.grade}</td>
            <td>${student.dob}</td>
            <td>${student.gender}</td>
            <td>${student.contact}</td>
            <td>${student.email}</td>
        `;

        tbody.appendChild(row);
    });
}

// Function to reset the form
function resetform() {
    document.getElementById("student-name").value = "";
    document.getElementById("student-id").value = "";
    document.getElementById("student-grade").value = "";
    document.getElementById("dob").value = "";
    document.querySelectorAll("input[name='Male']").forEach(input => input.checked = false);
    document.querySelectorAll("input[name='Female']").forEach(input => input.checked = false);
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
}

// Function to search for a student by ID
function searchStudent() {
    const searchId = document.getElementById("search-id").value.trim();
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ""; // Clear the table

    const filteredStudents = students.filter(student => student.id === searchId);

    if (filteredStudents.length === 0) {
        alert("No student found with the entered ID.");
        return;
    }

    filteredStudents.forEach(student => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.grade}</td>
            <td>${student.dob}</td>
            <td>${student.gender}</td>
            <td>${student.contact}</td>
            <td>${student.email}</td>
        `;

        tbody.appendChild(row);
    });
}

// Attach event listener for the search button
document.querySelector(".search-group .btn").addEventListener("click", searchStudent);
