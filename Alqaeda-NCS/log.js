// script.js

// Mock database of entry/exit logs
const logData = [
    { timestamp: "2024-12-01 08:30", userName: "John Doe", action: "Entry", gate: "Main Gate" },
    { timestamp: "2024-12-01 09:45", userName: "Jane Smith", action: "Exit", gate: "Side Gate" },
    { timestamp: "2024-12-01 10:00", userName: "Mike Johnson", action: "Entry", gate: "Main Gate" },
    { timestamp: "2024-12-01 11:30", userName: "Emily Davis", action: "Exit", gate: "Side Gate" },
    { timestamp: "2024-12-01 12:15", userName: "Chris Williams", action: "Entry", gate: "Main Gate" },
  ];
  
  // Function to load the logs into the table
  function loadLogs() {
    const tableBody = document.getElementById("logTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Clear any existing rows
  
    // Loop through the log data and append rows
    logData.forEach(log => {
      const row = tableBody.insertRow();
      
      // Insert columns into the row
      const timestampCell = row.insertCell(0);
      timestampCell.textContent = log.timestamp;
  
      const userNameCell = row.insertCell(1);
      userNameCell.textContent = log.userName;
  
      const actionCell = row.insertCell(2);
      actionCell.textContent = log.action;
  
      const gateCell = row.insertCell(3);
      gateCell.textContent = log.gate;
    });
  }
  
  // Function to filter logs based on the search input
  function searchLogs() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const filteredLogs = logData.filter(log => {
      return (
        log.userName.toLowerCase().includes(searchQuery) ||
        log.action.toLowerCase().includes(searchQuery) ||
        log.gate.toLowerCase().includes(searchQuery)
      );
    });
    
    // Rebuild the table with filtered logs
    const tableBody = document.getElementById("logTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Clear any existing rows
  
    filteredLogs.forEach(log => {
      const row = tableBody.insertRow();
      
      // Insert columns into the row
      const timestampCell = row.insertCell(0);
      timestampCell.textContent = log.timestamp;
  
      const userNameCell = row.insertCell(1);
      userNameCell.textContent = log.userName;
  
      const actionCell = row.insertCell(2);
      actionCell.textContent = log.action;
  
      const gateCell = row.insertCell(3);
      gateCell.textContent = log.gate;
    });
  }
  
  // Attach the loadLogs function to the button
  document.getElementById("loadLogs").addEventListener("click", loadLogs);
  
  // Attach the searchLogs function to the search input field
  document.getElementById("searchInput").addEventListener("input", searchLogs);
  