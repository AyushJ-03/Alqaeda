// Array to store generated passes
let passes = [];

// Generate a guest pass
function generatePass(event) {
  event.preventDefault(); // Prevent form submission

  const guestName = document.getElementById("guestName").value;
  const guestEmail = document.getElementById("guestEmail").value;
  const accessArea = document.getElementById("accessArea").value;
  const validityStart = document.getElementById("validityStart").value;
  const validityEnd = document.getElementById("validityEnd").value;

  const passId = Math.floor(Math.random() * 100000); // Generate a random pass ID

  // Add pass to the array
  passes.push({
    passId,
    guestName,
    guestEmail,
    accessArea,
    validity: `${validityStart} to ${validityEnd}`,
  });

  alert(`Pass generated successfully! Pass ID: ${passId}`);
  updatePassTable(); // Refresh the table
}

// Search for a guest pass
function searchPass(event) {
  event.preventDefault();

  const searchQuery = document.getElementById("search").value.toLowerCase();
  const results = passes.filter(pass =>
    pass.guestName.toLowerCase().includes(searchQuery) ||
    pass.passId.toString().includes(searchQuery)
  );

  if (results.length > 0) {
    updatePassTable(results);
  } else {
    alert("No passes found for the search query.");
  }
}

// Delete a guest pass
function deletePass(passId) {
  const confirmDelete = confirm("Are you sure you want to delete this pass?");
  if (confirmDelete) {
    passes = passes.filter(pass => pass.passId !== passId);
    alert("Pass deleted successfully!");
    updatePassTable();
  }
}

// Update the table with pass data
function updatePassTable(filteredPasses = passes) {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = ""; // Clear existing rows

  filteredPasses.forEach(pass => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${pass.passId}</td>
      <td>${pass.guestName}</td>
      <td>${pass.guestEmail}</td>
      <td>${pass.accessArea}</td>
      <td>${pass.validity}</td>
      <td>
        <button onclick="deletePass(${pass.passId})" class="btn btn-danger">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// Attach event listeners
document.querySelector("form[action='/generate-pass']").addEventListener("submit", generatePass);
document.querySelector("form[action='/search-pass']").addEventListener("submit", searchPass);
