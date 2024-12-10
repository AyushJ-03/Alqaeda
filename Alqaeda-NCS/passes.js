// script.js

// Mock database of vehicles with owner details
const vehicleDatabase = [
    { numberPlate: "AB123CD", owner: "John Doe", contact: "123-456-7890" },
    { numberPlate: "XY456ZT", owner: "Jane Smith", contact: "987-654-3210" },
    { numberPlate: "MN789OP", owner: "Mike Johnson", contact: "555-555-5555" },
    { numberPlate: "GH345JK", owner: "Emily Davis", contact: "321-654-9870" },
    { numberPlate: "JK567LM", owner: "Chris Williams", contact: "432-109-8765" },
    { numberPlate: "ZX890QS", owner: "Olivia Brown", contact: "876-543-2109" },
    { numberPlate: "PQ123ST", owner: "David Miller", contact: "234-567-8901" },
  ];
  
  // Function to search for a vehicle by its number plate
  function searchVehicle(event) {
    event.preventDefault(); // Prevent form submission
  
    const numberPlate = document.getElementById("vehicleNumber").value.toUpperCase();
    const resultDiv = document.getElementById("result");
  
    // Find the vehicle in the database
    const vehicle = vehicleDatabase.find(v => v.numberPlate === numberPlate);
  
    // Display the result
    if (vehicle) {
      resultDiv.innerHTML = `
        <p><strong>Vehicle Found:</strong></p>
        <p><strong>Number Plate:</strong> ${vehicle.numberPlate}</p>
        <p><strong>Owner:</strong> ${vehicle.owner}</p>
        <p><strong>Contact:</strong> ${vehicle.contact}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p><strong>No vehicle found with number plate:</strong> ${numberPlate}</p>`;
    }
  
    resultDiv.style.display = "block";
  }
  
  // Attach event listener to the form
  document.getElementById("searchForm").addEventListener("submit", searchVehicle);
  