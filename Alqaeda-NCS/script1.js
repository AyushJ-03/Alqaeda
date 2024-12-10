// Sample data structure to hold student information
let students = [];

// Function to handle adding a new student
document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const studentClass = document.getElementById('studentClass').value;
    const contact = document.getElementById('studentContact').value;

    const newStudent = {
        id: students.length + 1, // Simple ID generation
        name: name,
        age: age,
        class: studentClass,
        contact: contact
    };

    students.push(newStudent);
    alert('Student added successfully!');
    document.getElementById('addStudentForm').reset(); // Reset the form
});

// Function to handle editing a student
document.getElementById('editStudentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const studentID = parseInt(document.getElementById('editStudentID').value);
    const student = students.find(s => s.id === studentID);

    if (student) {
        student.name = document.getElementById('editStudentName').value || student.name;
        student.age = document.getElementById('editStudentAge').value || student.age;
        student.class = document.getElementById('editStudentClass').value || student.class;
        student.contact = document.getElementById('editStudentContact').value || student.contact;

        alert('Student details updated successfully!');
        document.getElementById('editStudentForm').reset(); // Reset the form
    } else {
        alert('Student not found!');
    }
});

// Function to generate an ID card
function generateIDCard() {
    const idCardDisplay = document.getElementById('idCardDisplay');
    idCardDisplay.innerHTML = ''; // Clear previous ID card

    if (students.length === 0) {
        idCardDisplay.innerHTML = '<p>No students available to generate ID cards.</p>';
        return;
    }

    students.forEach(student => {
        const idCard = document.createElement('div');
        idCard.className = 'id-card';
        idCard.innerHTML = `
            <h3>ID Card</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Contact:</strong> ${student.contact}</p>
        `;
        idCardDisplay.appendChild(idCard);
    });
}

// Function to track student locations (mock implementation)
function trackLocation() {
    const locationDisplay = document.getElementById('locationDisplay');
    locationDisplay.innerHTML = ''; // Clear previous location data

    if (students.length === 0) {
        locationDisplay.innerHTML = '<p>No students available to track.</p>';
        return;
    }

    students.forEach(student => {
        const locationInfo = document.createElement('div');
        locationInfo.innerHTML = `
            <p><strong>${student.name}</strong> is currently located at: <em>Location data not available</em></p>
        `;
        locationDisplay.appendChild(locationInfo);
    });
}